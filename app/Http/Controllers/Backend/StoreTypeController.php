<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\StoreType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoreTypeController extends Controller
{
    function index()
    {
        return Inertia::render('Backend/store/StoreType');
    }
    function store(Request $request)
    {

    }
    function edit(StoreType $storeType)
    {

    }
    function update(Request $request, StoreType $storeType)
    {

    }
    function destroy(StoreType $storeType)
    {

    } 
}
