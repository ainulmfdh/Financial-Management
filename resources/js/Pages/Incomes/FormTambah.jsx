// --- src/Pages/Incomes/FormTambah.jsx ---
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const FormTambah = ({ open, handleClose, form, handleChange, handleSubmit }) => {
    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-50"
                onClose={() => { }} // ❌ Tidak biarkan klik backdrop atau tekan Escape menutup modal
            >
                <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl space-y-4">
                        <Dialog.Title className="text-lg font-bold text-gray-800">Tambah Pendapatan</Dialog.Title>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Tanggal</label>
                                <input
                                    type="date"
                                    name="tanggal"
                                    value={form.tanggal}
                                    onChange={handleChange}
                                    className="w-full mt-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Jumlah</label>
                                <input
                                    type="number"
                                    name="jumlah"
                                    value={form.jumlah}
                                    onChange={handleChange}
                                    className="w-full mt-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Kategori</label>
                                <input
                                    type="text"
                                    name="kategori"
                                    value={form.kategori}
                                    onChange={handleChange}
                                    className="w-full mt-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                    placeholder="Gaji, Bonus, Lainnya"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
                                <textarea
                                    name="deskripsi"
                                    value={form.deskripsi}
                                    onChange={handleChange}
                                    className="w-full mt-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                                    rows={3}
                                ></textarea>
                            </div>
                            <div className="flex justify-end gap-2 pt-4">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    );
};

export default FormTambah;
