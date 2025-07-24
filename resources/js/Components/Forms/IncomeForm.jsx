import React, { useState } from 'react';

const IncomeForm = ({ income = null, onSubmit, onCancel, loading = false }) => {
    const [formData, setFormData] = useState({
        description: income?.description || '',
        amount: income?.amount || '',
        date: income?.date || new Date().toISOString().split('T')[0],
        category: income?.category || '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.description.trim()) {
            newErrors.description = 'Deskripsi harus diisi';
        }
        
        if (!formData.amount || formData.amount <= 0) {
            newErrors.amount = 'Jumlah harus lebih dari 0';
        }
        
        if (!formData.date) {
            newErrors.date = 'Tanggal harus diisi';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Deskripsi Pemasukan *
                </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.description ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Contoh: Penjualan produk, Gaji, dll"
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>

            <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah (Rp) *
                </label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    step="0.01"
                    min="0"
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.amount ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="0"
                />
                {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
            </div>

            <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal *
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.date ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
            </div>

            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Kategori
                </label>
                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Pilih Kategori</option>
                    <option value="Penjualan">Penjualan</option>
                    <option value="Jasa">Jasa</option>
                    <option value="Investasi">Investasi</option>
                    <option value="Bonus">Bonus</option>
                    <option value="Lainnya">Lainnya</option>
                </select>
            </div>

            <div className="flex justify-end gap-4 pt-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    disabled={loading}
                >
                    Batal
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Menyimpan...' : (income ? 'Update' : 'Simpan')}
                </button>
            </div>
        </form>
    );
};

export default IncomeForm;