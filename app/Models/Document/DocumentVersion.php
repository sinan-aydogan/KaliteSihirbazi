<?php

namespace App\Models\Document;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DocumentVersion extends Model
{
    use HasFactory;

    protected $fillable = [
        'document_id',
        'revised_by',
        'approved_by',
        'version',
        'revision_reason',
        'revision_detail',
        'status'
    ];

    public function document():BelongsTo{
        return $this->belongsTo(Document::class);
    }

    public function revisedBy():BelongsTo{
        return $this->belongsTo(User::class, 'revised_by');
    }

    public function approvedBy():BelongsTo{
        return $this->belongsTo(User::class, 'approved_by');
    }
}
