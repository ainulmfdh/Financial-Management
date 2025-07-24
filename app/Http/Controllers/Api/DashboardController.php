<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

// app/Http/Controllers/Api/DashboardController.php
class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $today = now()->format('Y-m-d');
        $currentMonth = now()->format('Y-m');

        return response()->json([
            'today_income' => Income::where('user_id', $user->id)
                ->whereDate('date', $today)->sum('amount'),
            'today_expense' => Expense::where('user_id', $user->id)
                ->whereDate('date', $today)->sum('amount'),
            'monthly_income' => Income::where('user_id', $user->id)
                ->where('date', 'like', $currentMonth.'%')->sum('amount'),
            'monthly_expense' => Expense::where('user_id', $user->id)
                ->where('date', 'like', $currentMonth.'%')->sum('amount'),
            'employee_count' => Employee::where('user_id', $user->id)
                ->where('status', 'active')->count(),
            'remaining_balance' => $this->calculateBalance($user->id),
            'chart_data' => $this->getChartData($user->id)
        ]);
    }

    private function calculateBalance($userId)
    {
        $totalIncome = Income::where('user_id', $userId)->sum('amount');
        $totalExpense = Expense::where('user_id', $userId)->sum('amount');
        return $totalIncome - $totalExpense;
    }

    private function getChartData($userId)
    {
        // Logic untuk data grafik 6 bulan terakhir
        $months = collect(range(5, 0))->map(function ($i) use ($userId) {
            $date = now()->subMonths($i);
            return [
                'month' => $date->format('M Y'),
                'income' => Income::where('user_id', $userId)
                    ->whereYear('date', $date->year)
                    ->whereMonth('date', $date->month)
                    ->sum('amount'),
                'expense' => Expense::where('user_id', $userId)
                    ->whereYear('date', $date->year)
                    ->whereMonth('date', $date->month)
                    ->sum('amount')
            ];
        });

        return $months->map(function ($month) {
            $month['balance'] = $month['income'] - $month['expense'];
            return $month;
        });
    }
}