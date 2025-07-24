import React, { useState } from 'react';

const DebtForm = ({ debt = null, onSubmit, onCancel, loading = false }) => {
    const [formData, setFormData] = useState({
        creditor_name: debt?.creditor_name || '',
        amount: debt?.amount || '',
        paid_amount: debt?.paid_amount || '0',
        due_date: debt?.due_date || '',
        description: debt?.description || '',
        status: debt?.status || 'pending',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.creditor_name) {
            newErrors.creditor_name = 'Nama kreditur wajib diisi.';
        }

        if (!formData.amount || isNaN(formData.amount) || Number(formData.amount) <= 0) {
            newErrors.amount = 'Jumlah utang harus berupa angka yang lebih dari 0.';
        }

        if (!formData.paid_amount || isNaN(formData.paid_amount) || Number(formData.paid_amount) < 0) {
            newErrors.paid_amount = 'Jumlah yang dibayar harus valid (minimal 0).';
        }

        if (!formData.due_date) {
            newErrors.due_date = 'Tanggal jatuh tempo wajib diisi.';
        }

        if (!formData.status) {
            newErrors.status = 'Status harus dipilih.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        if (onSubmit) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Nama Kreditur</label>
                <input
                    type="text"
                    name="creditor_name"
                    value={formData.creditor_name}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    placeholder="Contoh: PT. Amanah Sejahtera"
                />
                {errors.creditor_name && <p className="text-red-600 text-sm">{errors.creditor_name}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Jumlah Utang</label>
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    placeholder="Contoh: 5000000"
                />
                {errors.amount && <p className="text-red-600 text-sm">{errors.amount}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Jumlah yang Dibayar</label>
                <input
                    type="number"
                    name="paid_amount"
                    value={formData.paid_amount}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    placeholder="Contoh: 1000000"
                />
                {errors.paid_amount && <p className="text-red-600 text-sm">{errors.paid_amount}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Tanggal Jatuh Tempo</label>
                <input
                    type="date"
                    name="due_date"
                    value={formData.due_date}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
                {errors.due_date && <p className="text-red-600 text-sm">{errors.due_date}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    placeholder="Keterangan tambahan tentang utang..."
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                >
                    <option value="pending">Belum Lunas</option>
                    <option value="paid">Lunas</option>
                </select>
                {errors.status && <p className="text-red-600 text-sm">{errors.status}</p>}
            </div>

            <div className="flex justify-end gap-3">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                    disabled={loading}
                >
                    Batal
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? 'Menyimpan...' : 'Simpan'}
                </button>
            </div>
        </form>
    );
};

export default DebtForm;
