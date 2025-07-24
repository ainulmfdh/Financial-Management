// --- src/components/RevenueChart.jsx ---
import React from 'react';

const RevenueChart = () => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Total Revenue Sources</h3>

            <div className="flex items-center justify-center mb-6">
                <div className="relative">
                    <svg width="120" height="120" className="transform -rotate-90">
                        {/* Background circle */}
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                        {/* Expenses (Red) - 30% of 314 (circumference) = 94.2 */}
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#ef4444" strokeWidth="8"
                            strokeDasharray="94.2 314" strokeDashoffset="0" />
                        {/* Savings (Blue) - 40% of 314 = 125.6. Offset by 94.2 */}
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#3b82f6" strokeWidth="8"
                            strokeDasharray="125.6 314" strokeDashoffset="-94.2" />
                        {/* Investments (Cyan) - 20% of 314 = 62.8. Offset by 94.2 + 125.6 = 219.8 */}
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#06b6d4" strokeWidth="8"
                            strokeDasharray="62.8 314" strokeDashoffset="-219.8" />
                        {/* Remaining 10% (Gray) - Implicitly covered by background circle */}
                    </svg>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                        <span className="text-sm text-gray-600">Expenses</span>
                    </div>
                    <span className="text-sm font-medium text-red-600">+16.85%</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
                        <span className="text-sm text-gray-600">Savings</span>
                    </div>
                    <span className="text-sm font-medium text-blue-600">+45.36%</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full shadow-sm"></div>
                        <span className="text-sm text-gray-600">Investments</span>
                    </div>
                    <span className="text-sm font-medium text-red-600">-50.69%</span>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">STOCK</span>
                    <span className="text-red-600 font-medium">-0.99</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-600">CRYPTO</span>
                    <span className="text-green-600 font-medium">-7.66</span>
                </div>
            </div>
        </div>
    );
};

export default RevenueChart;