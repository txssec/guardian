<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\UserRepository;
use PhpParser\Error;

class UserService
{
    protected $repository;

    public function __construct()
    {
        $this->repository = new UserRepository();
    }

    public function register($body)
    {
        // TODO Enviar email de confirmação para o email usado no registro
        // TODO Gerar UUID aleatório como token para o usuário usando prefix usr

        $payload = [
            'name' => $body->name,
            'email' => $body->email,
            'password' => $body->password,
            'token' => 'usr-gerar-uuid-aleatorio',
        ];

        return $this->repository->storeOne($payload);
    }
}
