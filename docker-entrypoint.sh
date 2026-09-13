#!/bin/sh
set -e

echo "🚀 Kalite Sihirbazı başlatılıyor..."

# Ensure writable directories exist
mkdir -p /app/storage/framework/cache/data \
         /app/storage/framework/sessions \
         /app/storage/framework/views \
         /app/storage/logs \
         /app/storage/app/public

chmod -R 775 /app/storage 2>/dev/null || true

# Generate application key if not set (recommended: set APP_KEY as a
# persistent environment secret in production instead — a key regenerated
# on every restart invalidates existing sessions and encrypted data)
if [ -z "$APP_KEY" ]; then
    echo "APP_KEY tanımlı değil, oluşturuluyor..."
    php artisan key:generate --force
fi

# Run database migrations
echo "Veritabanı migration'ları çalıştırılıyor..."
php artisan migrate --force

# Ensure the public/storage symlink exists (Spatie MediaLibrary uploads)
php artisan storage:link --force 2>/dev/null || true

# Start the application server in the foreground
SERVER_PORT="${PORT:-8000}"
echo "🌐 Kalite Sihirbazı http://0.0.0.0:${SERVER_PORT} adresinde dinliyor"
exec php artisan serve --host=0.0.0.0 --port="${SERVER_PORT}"
