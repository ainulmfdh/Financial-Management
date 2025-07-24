// --- src/App.jsx ---
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '@/Components/Dashboard/Sidebar';
import Dashboard from '@/Components/Dashboard/Dashboard'
import Pendapatan from '@/Pages/Incomes/Pendapatan';
import Pengeluaran from '@/Pages/Expanses/Pengeluaran';
import Karyawan from '@/Pages/Employes/Karyawan';
import Hutang from '@/Pages/Hutang/Hutang';
import Laporan from '@/Pages/Laporan/Laporan';
import Authenticated from '@/Layouts/AuthenticatedLayout';

// Main App Component
function App({ auth }) {
    return (
        <Router>
            <div className="flex min-h-screen font-sans antialiased">
                {/* Sidebar akan selalu ada di sisi kiri */}
                <Sidebar />

                {/* Konten utama yang akan berubah berdasarkan rute */}
                <div className="flex-1 flex flex-col">
                    {/* Header akan selalu ada di atas konten utama */}
                    <Authenticated user={auth.user}>

                    </Authenticated>
                    <Routes>
                        <Route path="/default" element={<Dashboard />} />
                        <Route path="/pendapatan" element={<Pendapatan />} />
                        <Route path="/pengeluaran" element={<Pengeluaran />} />
                        <Route path="/karyawan" element={<Karyawan />} />
                        <Route path="/hutang" element={<Hutang />} />
                        <Route path="/laporan" element={<Laporan />} />
                        {/* Rute fallback untuk halaman yang tidak ditemukan */}
                        <Route path="*" element={
                            <div className="p-6 text-center text-red-500 text-3xl font-bold">
                                404 - Halaman Tidak Ditemukan
                            </div>
                        } />
                    </Routes>
                    {/* Footer bisa ditambahkan di sini jika ingin selalu ada */}
                    <div className="px-6 py-4 text-center mt-auto"> {/* mt-auto untuk mendorong footer ke bawah */}
                        <p className="text-sm text-gray-500">
                            Distributed by <a href="#" className="text-blue-600 hover:underline">FinanceManager</a>
                        </p>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;