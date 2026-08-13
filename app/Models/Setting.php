<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Setting extends Model implements HasMedia
{
    use InteractsWithMedia;

    protected $fillable = [
        'code',
        'value',
        'type',
        'module',
    ];

    /**
     * Media koleksiyonlarını tanımla
     */
    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('theme.logo')
            ->acceptsMimeTypes(['image/jpeg', 'image/png', 'image/jpg', 'image/svg', 'image/svg+xml', 'text/plain', 'image/webp', 'image/gif', 'image/avif']);

        $this->addMediaCollection('theme.background')
            ->acceptsMimeTypes(['image/jpeg', 'image/png', 'image/jpg', 'image/svg+xml', 'image/webp', 'image/gif', 'image/avif']);
    }
}
