<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DepartmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=> $this->id,
            'code'=> $this->code,
            'name'=> $this->name,
            'user_id'=> $this->user_id,
            'user_name'=> $this->user_id ? $this->manager->name : '',
            'department_id'=> $this->department_id,
            'department_name'=> $this->department_id ? $this->mainDepartment->name : '',
        ];
    }
}
