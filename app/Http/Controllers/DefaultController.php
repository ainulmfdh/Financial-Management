<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DefaultController extends Controller
{
    public function index()
    {
         return Inertia::render('Default'); // Ini akan merender `resources/js/Pages/Default.jsx`
    }

    public function logintest()
    {
         return Inertia::render('LoginTest'); // Ini akan merender `resources/js/Pages/Default.jsx`
    }

    public function test()
    {
         return Inertia::render('Test'); // Ini akan merender `resources/js/Pages/Default.jsx`
    }

}
