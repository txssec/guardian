<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository extends Repository
{
    /**
     * Informe a classe Repository com qual model ela deve trabalhar.
     */
    public function __construct()
    {
        parent::__construct(User::class);
    }

    // Reescreva os métodos da classe Repository aqui se necessário.
}
