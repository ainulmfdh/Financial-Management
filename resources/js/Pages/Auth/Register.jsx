import * as React from 'react';
import { useEffect } from 'react'; // Import useEffect
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from '../../../theme/AppTheme';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from '@/Components/Register/CustomIcons';
import { Head, Link, useForm } from '@inertiajs/react';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
    height: '100%',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    overflowY: 'auto', // Tambahkan ini agar bisa di-scroll jika kontennya melebihi tinggi viewport
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

export default function SignUp(props) {
    // Mengganti state error lokal dengan useForm dari Inertia.js
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '', // Diperlukan untuk Laravel Breeze register
    });

    // Efek untuk mereset password dan password_confirmation saat komponen di-unmount
    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    // Mengganti handleSubmit yang ada dengan logika Inertia.js
    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    // Fungsi validateInputs tidak lagi diperlukan karena validasi ditangani oleh Laravel/Inertia
    // const validateInputs = () => { ... };

    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />

            <SignUpContainer direction="column" justifyContent="space-between">

                {/* Head component for SEO/document title */}
                <Head title="Sign up" />

                <Card variant="outlined">
                    <SitemarkIcon />
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={submit}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="name">Full name</FormLabel>
                            <TextField
                                autoComplete="name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                placeholder="Jon Snow"
                                // Bind value dan onChange ke data useForm
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                // Tampilkan error dari Inertia
                                error={!!errors.name}
                                helperText={errors.name}
                                InputProps={{
                                    sx: {
                                        '& input': {
                                            outline: 'none',
                                            border: 'none',
                                            boxShadow: 'none',
                                            fontSize: '1rem',
                                        },
                                        '& input:-webkit-autofill': {
                                            WebkitBoxShadow: '0 0 0 1000px white inset !important',
                                            WebkitTextFillColor: '#000 !important',
                                            border: 'none',
                                            outline: 'none',
                                        },
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                placeholder="your@email.com"
                                name="email"
                                autoComplete="username" // Gunakan "username" seperti di login.jsx
                                variant="outlined"
                                // Bind value dan onChange ke data useForm
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                // Tampilkan error dari Inertia
                                error={!!errors.email}
                                helperText={errors.email}
                                InputProps={{
                                    sx: {
                                        '& input': {
                                            outline: 'none',
                                            border: 'none',
                                            boxShadow: 'none',
                                            fontSize: '1rem',
                                        },
                                        '& input:-webkit-autofill': {
                                            WebkitBoxShadow: '0 0 0 1000px white inset !important',
                                            WebkitTextFillColor: '#000 !important',
                                            border: 'none',
                                            outline: 'none',
                                        },
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                placeholder="••••••••"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                variant="outlined"
                                // Bind value dan onChange ke data useForm
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                // Tampilkan error dari Inertia
                                error={!!errors.password}
                                helperText={errors.password}
                                InputProps={{
                                    sx: {
                                        '& input': {
                                            outline: 'none',
                                            border: 'none',
                                            boxShadow: 'none',
                                            fontSize: '1rem',
                                        },
                                        '& input:-webkit-autofill': {
                                            WebkitBoxShadow: '0 0 0 1000px white inset !important',
                                            WebkitTextFillColor: '#000 !important',
                                            border: 'none',
                                            outline: 'none',
                                        },
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password_confirmation">Confirm Password</FormLabel>
                            <TextField
                                required
                                fullWidth
                                name="password_confirmation"
                                placeholder="••••••••"
                                type="password"
                                id="password_confirmation"
                                autoComplete="new-password"
                                variant="outlined"
                                // Bind value dan onChange ke data useForm
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                // Tampilkan error dari Inertia
                                error={!!errors.password_confirmation}
                                helperText={errors.password_confirmation}
                                InputProps={{
                                    sx: {
                                        '& input': {
                                            outline: 'none',
                                            border: 'none',
                                            boxShadow: 'none',
                                            fontSize: '1rem',
                                        },
                                        '& input:-webkit-autofill': {
                                            WebkitBoxShadow: '0 0 0 1000px white inset !important',
                                            WebkitTextFillColor: '#000 !important',
                                            border: 'none',
                                            outline: 'none',
                                        },
                                    },
                                }}
                            />
                        </FormControl>
                        {/* Checkbox "I want to receive updates via email." dihilangkan karena tidak ada di register.jsx Breeze */}
                        {/* <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I want to receive updates via email."
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={processing} // Dinonaktifkan saat proses pengiriman
                        // onClick={validateInputs} // Dihapus, karena validasi ditangani oleh Inertia
                        >
                            Sign up
                        </Button>
                    </Box>
                    <Divider>
                        <Typography sx={{ color: 'text.secondary' }}>or</Typography>
                    </Divider>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => console.log('Sign up with Google')} // Mengganti alert
                            startIcon={<GoogleIcon />}
                        >
                            Sign up with Google
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => console.log('Sign up with Facebook')} // Mengganti alert
                            startIcon={<FacebookIcon />}
                        >
                            Sign up with Facebook
                        </Button>
                        <Typography sx={{ textAlign: 'center' }}>
                            Already have an account?{' '}
                            <Link
                                href={route('login')} // Menggunakan rute Laravel Breeze
                                variant="body2"
                                sx={{ alignSelf: 'center' }}
                            >
                                Sign in
                            </Link>
                        </Typography>
                    </Box>
                </Card>
            </SignUpContainer>
        </AppTheme>
    );
}
