// --- src/components/SalesChart.jsx ---
import React from 'react';
import { TrendingUp } from 'lucide-react';

const SalesChart = () => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Daily Income</h3>
                <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
                    <TrendingUp className="w-4 h-4" />
                    <span>5%</span>
                </div>
            </div>

            <div className="h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg relative overflow-hidden flex items-end justify-center p-2">
                <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                    {/* Background grid lines for better readability */}
                    <line x1="0" y1="40" x2="400" y2="40" stroke="#ffffff30" strokeWidth="0.5" />
                    <line x1="0" y1="80" x2="400" y2="80" stroke="#ffffff30" strokeWidth="0.5" />
                    <line x1="0" y1="120" x2="400" y2="120" stroke="#ffffff30" strokeWidth="0.5" />

                    {/* Main income line */}
                    <path
                        d="M0,120 Q50,80 100,100 T200,60 T300,80 T400,40"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        className="opacity-90"
                    />
                    {/* Secondary income line */}
                    <path
                        d="M0,140 Q50,100 100,120 T200,80 T300,100 T400,60"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        className="opacity-70"
                    />
                </svg>
            </div>

            <div className="flex items-center justify-between mt-6">
                <div>
                    <p className="text-2xl font-bold text-gray-800">Rp4.230.000</p>
                    <p className="text-sm text-gray-600">Total Income</p>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-bold text-gray-800">321</p>
                    <p className="text-sm text-gray-600">Today's Transactions</p>
                </div>
            </div>
        </div>
    );
};

export default SalesChart;