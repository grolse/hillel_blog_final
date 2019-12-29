<?php


namespace App\Models\Traits;


use Illuminate\Database\Eloquent\Model;

trait DeletableTrait
{
    public function delete(Model $model)
    {
        if ($model->is_active) {
            $model->is_active = false;
        } else {
            $model->is_active = true;
        }
        return $model;
    }
}
