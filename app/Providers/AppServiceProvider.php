<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        /*Search Macro for Backend Table Component*/
        Builder::macro('search', function ($request) {

            $request = (object)$request;

            $perPage = (isset($request->perPage)) ? $request->perPage : 10;

            if (key($request)) {


                /*Compare Commands*/
                function compareCondition($comparator, $searchValue): array
                {

                    $searchQuery = [];

                    switch ($comparator) {

                        case 'co' :
                            $searchQuery['comparator'] = 'like';
                            $searchQuery['value'] = "%" . $searchValue . "%";
                            break;

                        case 'nco' :
                            $searchQuery['comparator'] = 'not like';
                            $searchQuery['value'] = "%" . $searchValue . "%";
                            break;

                        case 'sw' :
                            $searchQuery['comparator'] = 'like';
                            $searchQuery['value'] = $searchValue . "%";
                            break;

                        case 'ew' :
                            $searchQuery['comparator'] = 'like';
                            $searchQuery['value'] = "%" . $searchValue;
                            break;

                        case 'gt' :
                            $searchQuery['comparator'] = '>';
                            $searchQuery['value'] = $searchValue;
                            break;

                        case 'gte' :
                            $searchQuery['comparator'] = '>=';
                            $searchQuery['value'] = $searchValue;
                            break;

                        case 'lt' :
                            $searchQuery['comparator'] = '<';
                            $searchQuery['value'] = $searchValue;
                            break;

                        case 'lte' :

                            $searchQuery['comparator'] = '<=';
                            $searchQuery['value'] = $searchValue;
                            break;

                        case 'bt' :

                            $searchQuery['comparator'] = 'Between';
                            $searchQuery['value'] = [$searchValue['from'], $searchValue['to']];
                            break;

                        case 'nbt' :

                            $searchQuery['comparator'] = 'notBetween';
                            $searchQuery['value'] = [$searchValue['from'], $searchValue['to']];
                            break;

                        case 'eq' :

                            $searchQuery['comparator'] = '=';
                            $searchQuery['value'] = $searchValue;
                            break;

                        case 'neq' :

                            $searchQuery['comparator'] = '!=';
                            $searchQuery['value'] = $searchValue;
                            break;

                        default:

                            $searchQuery['comparator'] = 'like';
                            $searchQuery['value'] = "%" . $searchValue . "%";
                    }

                    return $searchQuery;
                }

                /*Advanced Search*/
                foreach ($request->query as $value) {
                    $field = compareCondition($value['comparator'], $value['value']);

                    if ($value['comparator'] === "bt" || $value['comparator'] === "nbt") {
                        $whenTrigger = $value['value']['from'] !== null || $value['value']['to'] !== null;
                    } else {
                        $whenTrigger = isset($value['value']);
                    }

                    $searchQuery = $this->when($whenTrigger, function ($query) use ($field, $value) {
                        if ($value['comparator'] === "bt") {
                            $query->whereBetween($value['key'], $field['value']['from'], $field['value']['to']);
                        }
                        else if($value['comparator'] === "nbt"){
                            $query->whereNotBetween($value['key'], $field['value']['from'], $field['value']['to']);
                        }
                        else {
                            $query->where($value['key'], $field['comparator'], $field['value']);
                        }
                    });

                }

                /*Order Function*/
                if ($request->sortDirection) {
                    $sortDirection = 'desc';
                } else {
                    $sortDirection = 'asc';
                }

                if ($request->sortBy) {
                    $searchQuery->orderBy($request->sortBy, $sortDirection);
                }

            } else {
                $searchQuery = $this;
            }


            return $this->paginate($perPage);
        });


        /*Get Related Data*/
        Builder::macro('getRelatedData', function ($key, $table) {
            return $this->whereIn('id', function ($query) use ($key, $table) {
                $query->select($key)
                    ->from($table)
                    ->distinct();
            });
        }
        );
    }
}
