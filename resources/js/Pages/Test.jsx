import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from '@/Components/Login/ForgotPassword';
import AppTheme from '../../theme/AppTheme';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from '@/Components/Login/CustomIcons';
import { Head, Link, useForm } from '@inertiajs/react';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
    height: '100%',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    overflowY: 'auto',
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

export default function SignIn({ status, canResetPassword }) {
    const [open, setOpen] = React.useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    // const handleClickOpen = () => {
    //     console.log('handleClickOpen called: Setting open to true');
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     console.log('handleClose called: Setting open to false');
    //     setOpen(false);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    const handleForgotPasswordClick = () => {
        navigate('/forgot-password'); // Arahkan ke halaman forgot password
        // Atau logika lain yang Anda butuhkan
    };

    return (
        <AppTheme>
            <CssBaseline enableColorScheme />
            <SignInContainer direction="column" justifyContent="space-between">


                <Head title="Sign in" />

                <Card variant="outlined">
                    <SitemarkIcon />
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Sign in
                    </Typography>

                    {status && <Typography color="success.main" sx={{ mb: 2 }}>{status}</Typography>}

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                error={!!errors.email}
                                helperText={errors.email}
                                id="email"
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                autoComplete="username"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
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
                        {/* Reverted FormControl for password to original styling and moved Link outside */}
                        <FormControl>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <TextField
                                error={!!errors.password}
                                helperText={errors.password}
                                name="password"
                                placeholder="••••••"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                required
                                fullWidth
                                variant="outlined"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
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
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={processing}
                        >
                            Sign in
                        </Button>

                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                            <Link
                                component="button"
                                type="button"
                                variant="body2"
                                href="/forgot-password"
                                sx={{ color: 'primary.main' }}
                            >
                                Forgot your password?
                            </Link>
                        </Box>

                    </Box>
                    <Divider>or</Divider>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => console.log('Sign in with Google')}
                            startIcon={<GoogleIcon />}
                        >
                            Sign in with Google
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => console.log('Sign in with Facebook')}
                            startIcon={<FacebookIcon />}
                        >
                            Sign in with Facebook
                        </Button>
                        <Typography sx={{ textAlign: 'center' }}>
                            Don&apos;t have an account?{' '}
                            <Link
                                href={route('register')}
                                variant="body2"
                                sx={{ alignSelf: 'center' }}
                            >
                                Sign up
                            </Link>
                        </Typography>
                    </Box>
                </Card>
            </SignInContainer>
        </AppTheme >
    );
}
