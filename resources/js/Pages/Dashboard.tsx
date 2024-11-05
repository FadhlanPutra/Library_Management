    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
    import { Head, Link, usePage } from '@inertiajs/react';
    import React, { useState } from "react";
    import {
      IconArrowLeft,
      IconBookDownload,
      IconBookmarkPlus,
      IconBooks,
      IconBooksOff,
      IconBookUpload,
      IconBrandTabler,
      IconSettings,
      IconUserBolt,
    } from "@tabler/icons-react";
    import { motion } from "framer-motion";
    import { cn } from "@/lib/utils";
    import { Sidebar, SidebarBody, SidebarLink } from '@/Components/ui/sidebar';
    import { memo } from "react";
    import withmemo from '../lib/withMemo';
    import { ToastContainer, toast} from 'react-toastify';
    import { idlogout, logoutLoading } from './Auth/notiftoast';
import { idLoading } from '@/app';
    // import { idLogout, notiflogin, notifregister } from './Auth/notiftoast';
    // import { idLogout} from './Auth/notiftoast';

    // toast.dismiss();
    toast.clearWaitingQueue();
    toast.dismiss(idlogout);
    toast.dismiss(logoutLoading);
    // toast.dismiss(idLoading);
    
    // Komponen utama Dashboard dengan layout dan sidebar
    const Dashboard = () => {
        // const [count, setCount] = useState("");
        // const [text, setText] = useState("");
        // toast.clearWaitingQueue();
        
        const user = usePage().props.auth.user;
        
        if (user) {
            toast(`Selamat Datang, ${user.name}`);
        }

        // toast.clearWaitingQueue();

        return (
            <AuthenticatedLayout>
            <Head title="Dashboard" />
            <nav>

            {/* 
            <p>jumlah klik {count}</p>
            <button onClick={() => setCount(count + 2)}>klik gw</button><br></br>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p>dikotak ini kamu input {text}</p> */}

            </nav>
            <DashboardContent user={user}/>
            <DashboardContent2/>
        </AuthenticatedLayout>
    );
}

export default Dashboard;

type DashboardContent = {
    user: {
            name: string;
        };
    };

    // Konten dashboard
    const DashboardContent: React.FC<DashboardContent> = ({ user }) => (
    <div className="flex flex-col me-1">
        <div className='p-4 bg-white rounded-xl border-black shadow-lg'>
            <div className='flex flex-row gap-8  justify-center'>
                <img src="/img/library.webp" alt="logo Library" className='w-full max-w-md' />
                <div className='flex flex-col justify-center gap-4 w-1/2'>
                    <h1 className='font-extrabold text-2xl'>Selamat Pagi, {user.name}</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias corrupti minus suscipit optio, voluptatibus cupiditate est neque saepe enim aut ex autem, quis excepturi, libero natus magnam accusantium? Natus, magnam?</p>
                
                    <div className='flex gap-5'>
                            <Link href='#' className='p-3 px-6 bg-gray-300 rounded-full'>Baca Buku</Link>
                        <Link href='#' className='p-3 px-6 bg-[#A78E51] rounded-full'>Pinjam Buku</Link>
                    </div>

                </div>
            </div>
        </div>
        
        
    </div>
    );
    
    export const OptimizedDashboardContent = React.memo(DashboardContent);
    
    const DashboardContent2 = () => (
        
        <div className="mt-10 me-1">
            <h1 className='font-medium text-2xl'>Info Dashboard Buku</h1>

            <div className="flex flex-row justify-between">
                <p className='py-3'>Dashboard informasi buku total buku dipinjam, buku sedang dipinjam, buku dikembalikan, buku rusak</p>
                <Link href='#' className='p-2 px-3 mt-1  bg-gray-300 rounded-full'>Kelola</Link>
            </div>


            <div className='flex mt-14 gap-5 justify-between text-white flex-row'>
                <div className="bg-[#6E987C] w-72 h-72 rounded-3xl shadow-md">
                    <span className="flex justify-between mt-5 mx-5">
                        <IconBooks className="w-24 h-24"></IconBooks>
                        <p className="font-medium text-7xl">78</p>
                    </span>
                    <p className="text-center mt-28">Total Buku Dipinjam</p>
                </div>
                <div className="bg-[#22615D] w-72 h-72 rounded-3xl shadow-md">
                    <span className="flex justify-between mt-5 mx-5">
                        <IconBookUpload className="w-24 h-24"></IconBookUpload>
                        <p className="font-medium text-7xl">19</p>
                    </span>
                    <p className="text-center mt-28">Sedang Dipinjam</p>
                </div>
                <div className="bg-[#FBC78F] w-72 h-72 rounded-3xl shadow-md">
                    <span className="flex justify-between mt-5 mx-5">
                        <IconBookDownload className="w-24 h-24"></IconBookDownload>
                        <p className="font-medium text-7xl">19</p>
                    </span>
                    <p className="text-center mt-28">Buku Dikembalikan</p>
                </div>
                <div className="bg-[#AC455E] w-72 h-72 rounded-3xl shadow-md">
                    <span className="flex justify-between mt-5 mx-5">
                        <IconBooksOff className="w-24 h-24"></IconBooksOff>
                        <p className="font-medium text-7xl">19</p>
                    </span>
                    <p className="text-center mt-28">Buku Rusak</p>
                </div>        
            </div>
        </div>

);

    // const OptimizedDashboardContent = React.memo(DashboardContent);
    export const OptimizedDashboardContent2 = React.memo(DashboardContent2);


