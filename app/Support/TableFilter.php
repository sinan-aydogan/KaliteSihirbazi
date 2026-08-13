<?php

namespace App\Support;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Schema;

class TableFilter
{
    private const COMPARATORS = ['co', 'nco', 'eq', 'neq', 'sw', 'ew', 'gt', 'gte', 'lt', 'lte'];

    public static function apply(Builder $query, array $aliases = []): Builder
    {
        $filters = request()->input('tableFilters', []);

        if (is_string($filters)) {
            $filters = json_decode($filters, true) ?: [];
        }

        if (! is_array($filters)) {
            return $query;
        }

        $model = $query->getModel();
        $table = $model->getTable();

        foreach (array_slice($filters, 0, 20) as $filter) {
            $key = Arr::get($filter, 'key');
            $comparator = Arr::get($filter, 'comparator');
            $value = Arr::get($filter, 'value');

            if (! is_string($key) || ! in_array($comparator, self::COMPARATORS, true) || ! is_scalar($value)) {
                continue;
            }

            if (isset($aliases[$key])) {
                self::applyAlias($query, $aliases[$key], $comparator, $value);

                continue;
            }

            if (preg_match('/^[a-zA-Z_][a-zA-Z0-9_]*$/', $key) && Schema::hasColumn($table, $key)) {
                self::applyValue($query, $query->qualifyColumn($key), $comparator, $value);
            }
        }

        return $query;
    }

    private static function applyAlias(Builder $query, mixed $alias, string $comparator, mixed $value): void
    {
        if (is_callable($alias)) {
            $alias($query, $comparator, $value);

            return;
        }

        if (is_array($alias) && isset($alias['relation'], $alias['column'])) {
            $query->whereHas($alias['relation'], fn (Builder $relation) => self::applyValue($relation, $relation->qualifyColumn($alias['column']), $comparator, $value)
            );

            return;
        }

        if (is_string($alias)) {
            self::applyValue($query, $query->qualifyColumn($alias), $comparator, $value);
        }
    }

    public static function applyValue(Builder $query, string $column, string $comparator, mixed $value): void
    {
        $wrapped = $query->getQuery()->getGrammar()->wrap($column);
        $textColumn = "LOWER(CAST({$wrapped} AS TEXT))";
        $normalized = mb_strtolower((string) $value, 'UTF-8');

        match ($comparator) {
            'co' => $query->whereRaw("{$textColumn} LIKE ?", ['%'.$normalized.'%']),
            'nco' => $query->whereRaw("{$textColumn} NOT LIKE ?", ['%'.$normalized.'%']),
            'eq' => $query->whereRaw("{$textColumn} = ?", [$normalized]),
            'neq' => $query->whereRaw("{$textColumn} <> ?", [$normalized]),
            'sw' => $query->whereRaw("{$textColumn} LIKE ?", [$normalized.'%']),
            'ew' => $query->whereRaw("{$textColumn} LIKE ?", ['%'.$normalized]),
            'gt' => $query->where($column, '>', $value),
            'gte' => $query->where($column, '>=', $value),
            'lt' => $query->where($column, '<', $value),
            'lte' => $query->where($column, '<=', $value),
        };
    }
}
