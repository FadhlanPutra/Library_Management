import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';
import React, { useRef, useState } from 'react';
import { Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import { idLogout, loadingLogin, loadingRegister, notiflogin, notifregister } from './notiftoast';
import { dismiss, logoutLoading } from './notiftoast';
import 'react-toastify/dist/ReactToastify.css';
import NProgress from 'nprogress';
// import { idRegister } from './Register';

toast.clearWaitingQueue();
toast.dismiss();
toast("Login Terlebih Dahulu");
// toast.clearWaitingQueue();

// toast.dismiss();
// toast.clearWaitingQueue();
// toast.dismiss(loadingRegister);
toast.dismiss(logoutLoading);
// toast.dismiss(idRegister);


export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    
    // toast.clearWaitingQueue();
    // toast.dismiss();
    
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });
    
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            

            <div className=' text-white'>
                <h1 className='font-bold text-3xl'>Selamat Datang di <br></br>Perpustakaan SMK PESAT</h1>
                <p className='text-[#D6D6D6]'>Silahkan login dengan akun anggota Anda</p>
            </div>

            <form onSubmit={submit}>
                <div>
                {/* <InputLabel htmlFor="Email" value="Email" /> */}
                    
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder='Masukan Email Anda'
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/* <InputLabel htmlFor="password" value="Password" /> */}

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder='Masukan Password'
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 flex justify-between">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-white">
                            Remember me
                        </span>
                    </label>
                    {canResetPassword && (
                        <Link
                            rel="prefetch"
                            href={route('password.request')}
                            className="rounded-md text-sm text-white underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Lupa Password?
                        </Link>
                    )}
                </div>

                <div className="mt-4 flex items-center flex-col justify-end">


                    <PrimaryButton onClick={dismiss} className="" disabled={processing} rel="prefetch">
                        Log in
                    </PrimaryButton>
                    <Link className='text-white mt-2 text-sm fint-light underline hover:text-gray-900' href={route('register')}>Kamu Belum Punya Akun?</Link>
                </div>
            </form>
        </GuestLayout>
    );
}


