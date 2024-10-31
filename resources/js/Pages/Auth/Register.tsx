import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className=' text-white mb-3'>
                <h1 className='font-bold text-3xl'>Daftar Menjadi Anggota<br></br>Perpustakaan SMK PESAT</h1>
                <p className='text-[#D6D6D6]'>Lengkapi Data di Bawah Ini</p>
            </div>

            <form onSubmit={submit}>
                <div>
                    {/* <InputLabel htmlFor="name" value=   "Name" /> */}

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full text-center"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder='Masukan Nama Lengkap'
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/* <InputLabel htmlFor="email" value="Email" /> */}

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full text-center"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder='Masukan Email Anda'
                        required
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
                        className="mt-1 block w-full text-center"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder='Masukan Password'
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    {/* <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    /> */}

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full text-center"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        placeholder='Konfirmasi Password'
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>


                <div className="mt-6 flex items-center justify-end">

                    <PrimaryButton className="" disabled={processing}>
                        Daftar Sekarang
                    </PrimaryButton>
                </div>
                <div className='mt-2 text-center'>
                    <Link
                        rel="prefetch"
                        href={route('login')}
                        className="rounded-md text-sm text-white underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Sudah Punya Akun?
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
