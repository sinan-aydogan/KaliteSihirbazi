<?php

namespace App\Traits\Document;

trait HasJsonColumns
{
    protected function prepareJsonFields(array $data, array $jsonFields): array
    {
        foreach ($jsonFields as $field) {
            if (isset($data[$field])) {
                $data[$field] = json_encode($data[$field], JSON_UNESCAPED_UNICODE);
            }
        }
        return $data;
    }

    protected function decodeJsonFields($model, array $jsonFields): array
    {
        $data = $model->toArray();
        foreach ($jsonFields as $field) {
            if (isset($data[$field]) && is_string($data[$field])) {
                $data[$field] = json_decode($data[$field], true);
            }
        }
        return $data;
    }
}

