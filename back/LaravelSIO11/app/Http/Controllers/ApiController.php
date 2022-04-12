<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ApiController extends Controller
{
    public function getAllClients() {
        $allClients = Client::all();
        return $allClients->toJson();
    }
}
