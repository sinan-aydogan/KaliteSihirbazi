<?php

namespace App\Traits\Document;

use App\Models\Document\Document;
use App\Models\Document\DocumentType;
use App\Models\Setting;

trait DocumentCodeTrait{

    public function getDocumentCode($document): string{
        $document_code = '';

        if($this->namingRule() === 'auto'){
            $document_code = $this->generateDocumentCode($document);
        }else{
            $document_code = $document['code'];
        }

        return $document_code;
    }
    public function namingRule(): string{
        return $document_naming_rule = Setting::where('code', 'document_naming_rule')->first()->value;
    }

    public function generateDocumentCode($document): string
    {
        $code = $this->getDepartmentCode($document);
        $code .= '.';
        $code .= $this->getDocumentTypeCode($document);
        $code .= '.';
        $code .= $this->getDocumentNumber($document['department_id'],$document['document_type_id']);

        return $code;
    }

    /*Get document type code*/
    public function getDocumentTypeCode($document): string{
        $type = DocumentType::find($document['document_type_id']);

        return $type->code;
    }

    /*Get document department code*/
    public function getDepartmentCode($document): string{
        $department = \App\Models\Department::find($document['department_id']);

        return $department->code;
    }

    /*Get last document number*/
    public function getDocumentNumber($department,$type): int{
        $documents = Document::where(['document_type_id' => $type, 'department_id' => $department])->orderBy('id', 'desc')->get();
        $last_item_counter = count($documents)>0 ? (int) explode('.',$documents->first()->code)[2] : null;
        $total_document_count = count($documents);
        $counter = max($last_item_counter, $total_document_count);

        return $counter > 0 ?  ++$counter : 1;
    }
}
