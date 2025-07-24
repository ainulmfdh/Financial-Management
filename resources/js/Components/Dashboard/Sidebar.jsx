// --- src/components/Sidebar.jsx ---
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    DollarSign,
    Home,
    Users
} from 'lucide-react';

// Custom icons (as per previous request to keep existing icons/structure)
const BanknoteArrowDown = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 12h12M12 18V6M12 6l-3 3M12 6l3 3" transform="rotate(90 12 12)" />
    </svg>
);
const BanknoteArrowUp = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 12h12M12 6v12M12 18l-3-3M12 18l3-3" transform="rotate(90 12 12)" />
    </svg>
);
const CalendarArrowDown = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <path d="M12 18V12M9 15l3 3 3-3"></path>
    </svg>
);
const FileCheck = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <path d="M9 14l2 2 4-4"></path>
    </svg>
);


// Menu Items for Sidebar
const menuItems = [
    { label: "Dashboard", icon: <Home className="w-5 h-5" />, to: "/" },
];

const transaksiItems = [
    { label: "Pendapatan", icon: <BanknoteArrowUp className="w-5 h-5" />, to: "/pendapatan" },
    { label: "Pengeluaran", icon: <BanknoteArrowDown className="w-5 h-5" />, to: "/pengeluaran" },
    { label: "Karyawan", icon: <Users className="w-5 h-5" />, to: "/karyawan" },
    { label: "Hutang", icon: <CalendarArrowDown className="w-5 h-5" />, to: "/hutang" },
    { label: "Laporan", icon: <FileCheck className="w-5 h-5" />, to: "/laporan" },
];

// Sidebar Component
const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-50 h-screen p-4 shadow-lg rounded-r-xl flex flex-col">
            {/* Logo */}
            <div className="mb-8">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <DollarSign className="w-7 h-7 text-blue-600" />
                </div>
            </div>

            {/* Main Menu */}
            <nav className="space-y-2 mb-8">
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) =>
                            `p-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${isActive
                                ? "bg-blue-100 text-blue-700 font-semibold shadow-sm"
                                : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                            }`
                        }
                    >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            {/* Transaksi Section */}
            <div className=""> {/* Use mt-auto to push this section to the bottom */}
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4 px-3">
                    TRANSAKSI
                </h4>

                <nav className="space-y-2">
                    {transaksiItems.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.to}
                            className={({ isActive }) =>
                                `p-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${isActive
                                    ? "bg-blue-100 text-blue-700 font-semibold shadow-sm"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                                }`
                            }
                        >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;