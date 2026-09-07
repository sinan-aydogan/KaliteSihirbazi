<?php

namespace App\Traits\Document;

use App\Enums\Document\DocumentVersionStatus;

trait DocumentVersionTrait
{
    public function getCurrentVersion($document): int
    {
        return (int) $document->versions()->max('version');
    }

    public function newVersionNumber($document): int
    {
        return $this->getCurrentVersion($document) + 1;
    }

    public function createVersion($document, $request): void
    {
        $document->versions()->create([
            'revised_by' => auth()->id(),
            'version' => $this->newVersionNumber($document),
            'revision_reason' => $request->revision_reason,
            'revision_detail' => $request->revision_detail,
            'status' => DocumentVersionStatus::Draft->value,
        ]);
    }
}
