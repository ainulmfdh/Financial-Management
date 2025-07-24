// --- src/components/TrafficSources.jsx ---
import React from 'react';

const TrafficSources = () => {
    const sources = [
        { name: 'Bank Transfer', percentage: 80, color: 'bg-blue-500' },
        { name: 'E-Wallet', percentage: 50, color: 'bg-gray-400' },
        { name: 'Credit Card', percentage: 20, color: 'bg-blue-300' },
        { name: 'Cash', percentage: 60, color: 'bg-gray-600' },
        { name: 'Others', percentage: 40, color: 'bg-blue-400' },
    ];

    return (
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Payment Methods</h3>

            <div className="space-y-4">
                {sources.map((source, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">{source.name}</span>
                            <span className="text-sm font-semibold text-gray-800">{source.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className={`${source.color} h-2.5 rounded-full transition-all duration-500 ease-out`}
                                style={{ width: `${source.percentage}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrafficSources;