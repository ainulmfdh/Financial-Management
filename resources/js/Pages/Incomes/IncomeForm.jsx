// resources/js/Components/Forms/IncomeForm.jsx
import { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function IncomeForm({ income = null, onSubmit, onCancel }) {
    const { data, setData, processing, errors } = useForm({
        description: income?.description || '',
        amount: income?.amount || '',
        date: income?.date || new Date().toISOString().split('T')[0],
        category: income?.category || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                <input
                    type="text"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                />
                {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Jumlah</label>
                <input
                    type="number"
                    step="0.01"
                    value={data.amount}
                    onChange={(e) => setData('amount', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                />
                {errors.amount && <p className="text-red-500 text-xs">{errors.amount}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Tanggal</label>
                <input
                    type="date"
                    value={data.date}
                    onChange={(e) => setData('date', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Kategori</label>
                <input
                    type="text"
                    value={data.category}
                    onChange={(e) => setData('category', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
            </div>

            <div className="flex justify-end gap-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                    Batal
                </button>
                <button
                    type="submit"
                    disabled={processing}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                    {processing ? 'Menyimpan...' : 'Simpan'}
                </button>
            </div>
        </form>
    );
}