<?php

namespace App\Repositories;

use PhpParser\Error;

class Repository
{
    private $model;

    public function __construct($model) {
        $this->model = $model;
    }

    protected function getModelClass()
    {
        if (!$this->model) {
            return new Error('Model has not been set to repository');
        }

        return $this->model;
    }

    public function getAll()
    {
        return app($this->getModelClass())->all();
    }

    public function getOne($id)
    {
        return app($this->getModelClass())->where('id', $id)->first();
    }

    public function storeOne($payload)
    {
        return app($this->getModelClass())->create($payload);
    }

    public function updateOne($id, $payload)
    {
        return app($this->getModelClass())->where('id', $id)->update($payload);
    }
}
