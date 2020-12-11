<?php

namespace App\Http\Controllers\Api;

use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use App\Services\UserService;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    protected $service;
    protected $repository;

    public function __construct() {
        $this->service = new UserService();
        $this->repository = new UserRepository();
    }

    public function index()
    {
        return response()->json($this->repository->getAll());
    }

    public function show($id)
    {
        return response()->json($this->repository->getOne($id));
    }
}
