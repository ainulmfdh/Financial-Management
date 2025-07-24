// --- src/components/StatsCard.jsx ---
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({ title, value, change, changeText, color, icon: Icon }) => {
    const isPositive = change && change.startsWith('+');
    const isNegative = change && change.startsWith('-');

    return (
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className={`text-3xl font-bold text-${color}-600`}>{value}</h3>
                    <p className="text-gray-600 text-sm">{title}</p>
                </div>
                <div className={`w-12 h-12 bg-${color}-100 rounded-full flex items-center justify-center shadow-inner`}>
                    <Icon className={`w-6 h-6 text-${color}-600`} />
                </div>
            </div>
            {change && (
                <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${color === 'orange' ? 'bg-orange-100 text-orange-800' :
                    color === 'red' ? 'bg-red-100 text-red-800' :
                        color === 'green' ? 'bg-green-100 text-green-800' :
                            'bg-blue-100 text-blue-800'
                    }`}>
                    {isPositive && <TrendingUp className="w-3 h-3" />}
                    {isNegative && <TrendingDown className="w-3 h-3" />}
                    <span>{changeText}</span>
                </div>
            )}
        </div>
    );
};

export default StatsCard;