// --- src/pages/Pendapatan.jsx ---
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormTambah from '@/Pages/Incomes/FormTambah';

const Pendapatan = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState({
        tanggal: '',
        jumlah: '',
        kategori: '',
        deskripsi: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Pendapatan disubmit:', form);
        setIsOpen(false);
    };

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: (theme.vars ?? theme).palette.text.secondary,
        backgroundColor: 'transparent',
        boxShadow: 'none',
    }));

    return (
        <div className="w-full max-w-5xl mx-auto">
            <Box sx={{ flexGrow: 1 }} className="mb-2">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                        <Item>
                            <p className="font-bold text-2xl">DATA PEMASUKAN</p>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <div className="flex justify-end">
                                <Button
                                    variant="contained"
                                    startIcon={<AddRoundedIcon sx={{ fontSize: 22 }} />}
                                    sx={{ fontWeight: 'bold' }}
                                    onClick={() => setIsOpen(true)} // ✅ diperbaiki
                                >
                                    Tambah
                                </Button>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>

            {/* Modal form pemisah */}
            <FormTambah
                open={isOpen}
                handleClose={() => setIsOpen(false)}
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="px-6 py-4 text-left font-semibold text-lg">ID</th>
                            <th className="px-6 py-4 text-left font-semibold text-lg">Deskripsi</th>
                            <th className="px-6 py-4 text-left font-semibold text-lg">Jumlah</th>
                            <th className="px-6 py-4 text-left font-semibold text-lg">Kategori</th>
                            <th className="px-6 py-4 text-left font-semibold text-lg">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="px-6 py-4 text-gray-700" colSpan={5}>Belum ada data</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Pendapatan;
