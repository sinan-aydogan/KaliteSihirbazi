<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class User extends Authenticatable implements HasMedia
{
    use HasApiTokens;

    /** @use HasFactory<UserFactory> */
    use HasFactory;

    use InteractsWithMedia;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = [
        'profile_photo_path',
        'profile_photo_url',
    ];

    public const AVATAR_COLLECTION = 'UseAvatars';

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection(self::AVATAR_COLLECTION)
            ->singleFile()
            ->acceptsMimeTypes([
                'image/jpeg',
                'image/png',
                'image/webp',
            ]);
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('avatar')
            ->nonQueued()
            ->performOnCollections(self::AVATAR_COLLECTION)
            ->fit(Fit::Crop, 512, 512)
            ->format('webp')
            ->quality(82);
    }

    public function getProfilePhotoPathAttribute(): ?string
    {
        return $this->getFirstMedia(self::AVATAR_COLLECTION)?->getPath();
    }

    public function getProfilePhotoUrlAttribute(): string
    {
        $avatar = $this->getFirstMedia(self::AVATAR_COLLECTION);

        return $avatar?->getUrl('avatar') ?? asset('assets/images/default/user-avatar.svg');
    }

    /**
     * Get the parent accountable model (staff, customer or vendor).
     *
     * @return MorphTo<Model, $this>
     */
    public function accountable(): MorphTo
    {
        return $this->morphTo();
    }
}
