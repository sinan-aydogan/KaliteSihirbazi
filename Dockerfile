# syntax=docker/dockerfile:1

# ==============================================================================
# Stage 1: Build (Composer deps + Frontend assets)
#
# Frontend assets (Inertia Vue 3 + Tailwind CSS) are built in the SAME stage as
# the PHP dependencies rather than a lean node-only stage: the Vite build runs
# `php artisan wayfinder:generate` via the @laravel/vite-plugin-wayfinder
# plugin's buildStart hook, which needs a bootable Laravel app (vendor/) to
# introspect routes/controllers. A node-only stage has no PHP to satisfy that.
# ==============================================================================
FROM php:8.3-cli-bookworm AS builder

WORKDIR /app

ENV DEBIAN_FRONTEND=noninteractive

# System dependencies, Node.js 22, and PHP extensions needed to install
# Composer/npm deps and run `npm run build` (incl. GD for image processing
# and pdo_pgsql for the app's Postgres connection).
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    curl \
    unzip \
    libpq-dev \
    libzip-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y --no-install-recommends nodejs \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
        pdo_pgsql \
        gd \
        bcmath \
        zip \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Install PHP dependencies
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader --no-scripts

# Copy application source (see .dockerignore for exclusions)
COPY . .

# A .env is required for `artisan` to boot while generating wayfinder routes
# below — it is NOT the runtime .env (that comes from container environment
# variables at start, see docker-entrypoint.sh).
RUN cp .env.example .env && php artisan key:generate --force

# Install npm dependencies and build production assets (public/build)
RUN npm ci --no-audit && npm run build

# Finish Composer's post-install steps now that autoload/routes exist
RUN composer dump-autoload --optimize --no-dev

# Drop the now-unneeded node toolchain before the final copy to keep the
# runtime image smaller
RUN rm -rf node_modules .env

# ==============================================================================
# Stage 2: Runtime (PHP application server)
# ==============================================================================
FROM php:8.3-cli-bookworm AS runtime

WORKDIR /app

ENV DEBIAN_FRONTEND=noninteractive

# Runtime-only shared libraries (no compilers/headers). PHP extensions are
# NOT rebuilt here — docker-php-ext-install needs the same -dev/header
# packages as the builder stage (e.g. zip needs zlib1g-dev), so instead the
# already-compiled extensions from the builder stage are copied below.
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    libpq5 \
    libpng16-16 \
    libjpeg62-turbo \
    libfreetype6 \
    libzip4 \
    && rm -rf /var/lib/apt/lists/*

# Compiled PHP extensions (pdo_pgsql, gd, bcmath, zip) + their enabling ini
# files, built once in the builder stage against the identical base image.
COPY --from=builder /usr/local/lib/php/extensions/ /usr/local/lib/php/extensions/
COPY --from=builder /usr/local/etc/php/conf.d/ /usr/local/etc/php/conf.d/

# Copy the fully built application (vendor/, public/build/, app code) from the builder stage
COPY --from=builder /app ./

# Setup entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Environment defaults (override at deploy time)
ENV PORT=8000
ENV APP_ENV=production
ENV APP_DEBUG=false
ENV DB_CONNECTION=pgsql
ENV QUEUE_CONNECTION=sync
ENV SESSION_DRIVER=database
ENV FILESYSTEM_DISK=local

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD curl -f http://localhost:8000/up || exit 1

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
