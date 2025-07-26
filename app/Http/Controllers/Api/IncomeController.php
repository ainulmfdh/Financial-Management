<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IncomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() 
    {
        return response()->json(Income::where('user_id', auth()->id())->latest()->get());
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) 
    {
        $validated = $request->validate([
            'description' => 'required|string',
            'amount' => 'required|numeric',
            'date' => 'required|date',
            'category' => 'required|string'
        ]);

        $income = Income::create([...$validated, 'user_id' => auth()->id()]);
        return response()->json($income, 201);
    }

    /**
     * Display the specified resource.
     */
   public function show($id) 
   {
        $income = Income::where('id', $id)->where('user_id', auth()->id())->firstOrFail();
        return response()->json($income);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, string $id)
    // {
        
    // }
    public function update(Request $request, $id) 
    {
        $income = Income::where('id', $id)->where('user_id', auth()->id())->firstOrFail();
        $income->update($request->only(['description', 'amount', 'date', 'category']));
        return response()->json($income);
    }

    /**
     * Remove the specified resource from storage.
     */
   public function destroy($id) 
   {
        $income = Income::where('id', $id)->where('user_id', auth()->id())->firstOrFail();
        $income->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
