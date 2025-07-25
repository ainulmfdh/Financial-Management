// --- src/pages/Dashboard.jsx ---
import React from 'react';
import StatsCard from './StatsCard';
import SalesChart from './SalesChart';
import RevenueChart from './RevenueChart';
import TrafficSources from './TrafficSources';
import { DollarSign, BanknoteArrowDown, BanknoteArrowUp, UserRound } from 'lucide-react'; // Import icons needed for Dashboard

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex-1 flex flex-col p-6"> {/* flex-1 to take available space */}
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                <StatsCard
                    title="Sisa Uang"
                    value="Rp30.200.000"
                    change="+10%"
                    changeText="profit increase"
                    color="orange"
                    icon={DollarSign}
                />
                <StatsCard
                    title="Pendapatan"
                    value="Rp3.200.000"
                    change="+10k"
                    changeText="this month"
                    color="green"
                    icon={BanknoteArrowUp}
                />


            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">

                <StatsCard
                    title="Pengeluaran"
                    value="Rp6.200.000"
                    change="-28%"
                    changeText="this month"
                    color="red"
                    icon={BanknoteArrowDown}
                />

                <StatsCard
                    title="Karyawan"
                    value="500"
                    change="+1k"
                    changeText="generated"
                    color="blue"
                    icon={UserRound}
                />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <SalesChart />
                <RevenueChart />
                <TrafficSources />
            </div>
        </div>
    );
};

export default Dashboard;