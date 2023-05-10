<?php

namespace App\Traits\Document;

use App\Models\Document\Document;
use App\Models\Document\DocumentType;
use App\Models\Setting;

trait DocumentVersionTrait{

    public function getCurrentVersion($document): int{
        $version = '';

        if($document->versions->count() > 0){
            $version= $document->versions->last()->version;
        }else{
            $version = 0;
        }

        return $version;
    }

    public function newVersionNumber($document): int
    {
        return $this->getCurrentVersion($document)+1;
    }

    public function createVersion($document, $request): void
    {
        $document->versions()->create([
            'revised_by' => auth()->user()->id,
            'version' => $this->newVersionNumber($document),
            'revision_reason' => $request->revision_reason,
            'revision_detail' => $request->revision_detail,
            'status' => 'pending'
        ]);
    }
}
