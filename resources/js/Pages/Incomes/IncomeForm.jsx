// --- src/pages/Pendapatan.jsx ---
import React from 'react';
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Pendapatan = () => {
    const employees = [
        {
            fullName: "Vincent Williamson",
            age: 31,
            jobTitle: "iOS Developer",
            location: "Washington"
        },
        {
            fullName: "Joseph Smith",
            age: 27,
            jobTitle: "Project Manager",
            location: "Somerville, MA"
        },
        {
            fullName: "Justin Black",
            age: 26,
            jobTitle: "Front-End Developer",
            location: "Los Angeles"
        },
        {
            fullName: "Sean Guzman",
            age: 25,
            jobTitle: "Web Designer",
            location: "San Francisco"
        },
        {
            fullName: "Keith Carter",
            age: 20,
            jobTitle: "Graphic Designer",
            location: "New York, NY"
        },
        {
            fullName: "Austin Medina",
            age: 32,
            jobTitle: "Photographer",
            location: "New York"
        },
        {
            fullName: "Vincent Williamson",
            age: 31,
            jobTitle: "iOS Developer",
            location: "Washington"
        },
        {
            fullName: "Joseph Smith",
            age: 27,
            jobTitle: "Project Manager",
            location: "Somerville, MA"
        }
    ];

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
                <Grid container spacing={2}>
                    <Grid size={10}>
                        <Item> <p className='font-bold text-2xl'>DATA PEMASUKAN</p></Item>
                    </Grid>
                    <Grid size={2}>
                        <Item> <Stack direction="row" spacing={2}>
                            <Link href="/pendapatan/tambah">
                                <Button
                                    variant="contained"
                                    startIcon={<AddRoundedIcon sx={{ fontSize: 22 }} />}
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Tambah
                                </Button>
                            </Link>
                        </Stack></Item>
                    </Grid>
                </Grid>
            </Box>

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
                        {employees.map((employee, index) => (
                            <tr
                                key={index}
                                className={`
                  ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} 
                  hover:bg-indigo-100 transition-colors duration-200 ease-in-out
                `}
                            >
                                <td className="px-6 py-4 text-gray-800 font-medium"></td>
                                <td className="px-6 py-4 text-gray-700"></td>
                                <td className="px-6 py-4 text-gray-700"></td>
                                <td className="px-6 py-4 text-gray-700"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >

    );
};

export default Pendapatan;