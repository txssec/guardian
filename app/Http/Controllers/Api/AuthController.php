<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;
use App\Services\UserService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected $service;
    protected $repository;

    public function __construct() {
        $this->service = new UserService();
        $this->repository = new UserRepository();
    }

    public function register(Request $request)
    {
        $this->service->register($request);
    }
}
