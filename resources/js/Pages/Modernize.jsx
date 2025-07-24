import React from 'react';
import {
    DollarSign,
    FileText,
    Eye,
    Download,
    TrendingUp,
    TrendingDown,
    Home,
    FileCheck,
    Shield,
    Grid3x3,
    Type,
    HelpCircle,
    Menu
} from 'lucide-react';

// Header Component
const Header = () => {
    return (
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                </div>
                <h1 className="text-xl font-semibold">FinanceManager</h1>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-blue-500 text-white placeholder-blue-200 px-4 py-2 rounded-lg focus:outline-none focus:bg-blue-400"
                    />
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-sm">🔔</span>
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-sm">👤</span>
                </div>
            </div>
        </div>
    );
};

// Sidebar Component
const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-50 h-screen p-4">
            <div className="mb-8">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">FINANCEMANAGER</h3>
                <p className="text-sm text-gray-600">Dashboard</p>
            </div>

            <nav className="space-y-2">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-lg flex items-center space-x-3">
                    <Home className="w-5 h-5" />
                    <span className="font-medium">Dashboard</span>
                </div>
            </nav>

            <div className="mt-8">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">PAGES</h4>
                <p className="text-sm text-gray-600 mb-4">Financial Pages</p>
                <nav className="space-y-2">
                    <div className="p-3 text-gray-700 flex items-center space-x-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <FileCheck className="w-5 h-5" />
                        <a href='#'>Transactions</a>
                    </div>
                    <div className="p-3 text-gray-700 flex items-center space-x-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <Shield className="w-5 h-5" />
                        <span>Security</span>
                    </div>
                </nav>
            </div>

            <div className="mt-8">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">UTILS</h4>
                <nav className="space-y-2">
                    <div className="p-3 text-gray-700 flex items-center space-x-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <Grid3x3 className="w-5 h-5" />
                        <span>Reports</span>
                    </div>
                    <div className="p-3 text-gray-700 flex items-center space-x-3 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <Type className="w-5 h-5" />
                        <span>Categories</span>
                    </div>
                </nav>
            </div>

            <div className="mt-8">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">SUPPORT</h4>
            </div>
        </div>
    );
};

// Stats Card Component
const StatsCard = ({ title, value, change, changeText, color, icon: Icon }) => {
    const isPositive = change && change.startsWith('+');
    const isNegative = change && change.startsWith('-');

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className={`text-2xl font-bold text-${color}-500`}>{value}</h3>
                    <p className="text-gray-600 text-sm">{title}</p>
                </div>
                <div className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center`}>
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

// Sales Chart Component
const SalesChart = () => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Daily Income</h3>
                <div className="flex items-center space-x-2 text-sm text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>5%</span>
                </div>
            </div>

            <div className="h-40 bg-blue-500 rounded-lg relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 400 160">
                    <path
                        d="M0,120 Q50,80 100,100 T200,60 T300,80 T400,40"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        className="opacity-80"
                    />
                    <path
                        d="M0,140 Q50,100 100,120 T200,80 T300,100 T400,60"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        className="opacity-60"
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

// Revenue Chart Component
const RevenueChart = () => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Total Revenue Sources</h3>

            <div className="flex items-center justify-center mb-6">
                <div className="relative">
                    <svg width="120" height="120" className="transform -rotate-90">
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#ef4444" strokeWidth="8"
                            strokeDasharray="94 314" strokeDashoffset="0" />
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#3b82f6" strokeWidth="8"
                            strokeDasharray="125 314" strokeDashoffset="-94" />
                        <circle cx="60" cy="60" r="50" fill="none" stroke="#06b6d4" strokeWidth="8"
                            strokeDasharray="63 314" strokeDashoffset="-219" />
                    </svg>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Expenses</span>
                    </div>
                    <span className="text-sm font-medium text-red-600">+16.85%</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Savings</span>
                    </div>
                    <span className="text-sm font-medium text-blue-600">+45.36%</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
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

// Traffic Sources Component
const TrafficSources = () => {
    const sources = [
        { name: 'Bank Transfer', percentage: 80, color: 'bg-blue-500' },
        { name: 'E-Wallet', percentage: 50, color: 'bg-gray-400' },
        { name: 'Credit Card', percentage: 20, color: 'bg-blue-300' },
        { name: 'Cash', percentage: 60, color: 'bg-gray-600' },
        { name: 'Others', percentage: 40, color: 'bg-blue-400' },
    ];

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Payment Methods</h3>

            <div className="space-y-4">
                {sources.map((source, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">{source.name}</span>
                            <span className="text-sm font-semibold text-gray-800">{source.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className={`${source.color} h-2 rounded-full transition-all duration-300`}
                                style={{ width: `${source.percentage}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Main Dashboard Component
const Income = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar />

            <div className="flex-1">
                <Header />


            </div>
        </div>
    );
};

export default Income;