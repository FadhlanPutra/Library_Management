    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
    import { Head, Link } from '@inertiajs/react';
    import React, { useState } from "react";
    import {
      IconArrowLeft,
      IconBrandTabler,
      IconSettings,
      IconUserBolt,
    } from "@tabler/icons-react";
    import { motion } from "framer-motion";
    import { cn } from "@/lib/utils";
    import { Sidebar, SidebarBody, SidebarLink } from '@/Components/ui/sidebar';
    import { memo } from "react";
    import withmemo from '../lib/withMemo';



    // Komponen utama Dashboard dengan layout dan sidebar
    const Dashboard = () => {
    return (
        <AuthenticatedLayout>
        <Head title="Dashboard" />
        <nav>

        </nav>
        <DashboardContent/>
        <DashboardContent2/>
        </AuthenticatedLayout>
    );
    }

    const OptimizedDashboard = withmemo(Dashboard);
    export default OptimizedDashboard;






    // Konten dashboard
    const DashboardContent = () => (
    <div className="flex flex-col me-1">
        <div className='p-4 bg-white rounded-xl border-black shadow-lg'>
            <div className='flex flex-row gap-8  justify-center'>
                <img src="/img/library.webp" alt="logo Library" className='w-full max-w-md' />
                <div className='flex flex-col justify-center gap-4 w-1/2'>
                    <h1 className='font-extrabold text-2xl'>Selamat Pagi, Admin!</h1>
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
    
    export const OptimizedDashboardContent = withmemo(DashboardContent);
    
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
                        <img src='https://s3-alpha-sig.figma.com/img/47f5/a62e/3fc54fa11275b6d285637dd291503a51?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mjqFqII8-jzZitxpxbeZyL5VTH2e-C1IR62pl3hvE4QP9FHLypFD4bCsieG3giIISq6sH7WbSWyUfkXnVv7yc73ddKEuKO3KzhjPnL4k5ONDbdR0j30IeZfwhPkI4EiS6oBUHkuhLjgbQxaV-ZXw72erZePzs9udwPukOdN3bvE6voRb36hFeKNrZrLmx8GbO-2Oy93t-OSGuBKGqr2Gkpr98N75sKJsnntWXuKTcYDEJAtydVGc5WxGa7HKOcD702GHLh4H1UCMaM3T1O1wXfQZp7C83U4Ai9i~sQbq10KWN6jJBHAA85UKV6syvQjOVI0Zt2OHdHOILlBYsFdQlw__' className="" loading="lazy"></img>
                        <p className="font-medium text-7xl">78</p>
                    </span>
                    <p className="text-center mt-28">Total Buku Dipinjam</p>
                </div>
                <div className="bg-[#22615D] w-72 h-72 rounded-3xl shadow-md">
                    <span className="flex justify-between mt-5 mx-5">
                        <img src='https://s3-alpha-sig.figma.com/img/ba19/bf09/4d8ec023c8b25275f3f91fd89e99055f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gjmnCAJkYEr1l8q~~u5ojr9MFh2iThWDkdllTe9mlqelphXDUFGXzkQJldtfTV1BdkbUvBj~l2kmJ3qI-dI5xEn1s0K~lUniR-enpC4B8nsau9mLs1KBRNJoBdYAE1-VmJmalQ~FuiCIHJ4S9OnCb36~6YCj~EGDvAkvxuYTY75Z8LezJq0iD3N9kTFaWsN3ekMWGB4~4TxwE~N9ZB02Saya6k21eZPlqH6ZVljoiO25l5MKsl79UGmsdEQjYUzrKY9kwSuqfmsv6sIuzXdQKYhD~lJo9TxeVAWYQONxGTmuV1CX7AAaf2yb276RbIO77ki361tqF~cMvfv1u6SHpg__' className="" loading="lazy"></img>
                            <p className="font-medium text-7xl">19</p>
                    </span>
                    <p className="text-center mt-28">Sedang Dipinjam</p>
                </div>
                <div className="bg-[#FBC78F] w-72 h-72 rounded-3xl shadow-md">
                    <span className="flex justify-between mt-5 mx-5">
                        <img src='https://s3-alpha-sig.figma.com/img/e1fd/32cf/67e5bea8bf8cb04bdf0976ceaa8fd4c3?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4gky6BPivkWor8ChuJsoRoRWpf4KSEYVhW1rqVVx0wpOUOgyXort2O19qhfH23W4C7OSSybNqr934lQNDqsEs23a2h7wmoCg4iPPPWb-W5bB7hWhPegqe9SoztX8f3Scc1sBvdIh~xWyYSKaeCOMx-6lQ4Un1B5X~GX7LFC04l90wPREXKdH0tDzt6WYVrjpmZCLRYPyAj67EW9TZ7Ca9M7mDvZI9FGFi~~qJfw0bb~3kpOSBwmTKROWz-GQEMq9OY~XkUyM2TwM6T3wR1bLQ9ndZQUkkubF9M4K~2ZmUTveyJ1pLdhmWpzsRs-LuD0iFmNIYJEr6k7XvR-ECA1PA__' className="" loading="lazy"></img>
                            <p className="font-medium text-7xl">19</p>
                    </span>
                    <p className="text-center mt-28">Buku Dikembalikan</p>
                </div>
                <div className="bg-[#AC455E] w-72 h-72 rounded-3xl shadow-md">
                    <span className="flex justify-between mt-5 mx-5">
                        <img src='https://s3-alpha-sig.figma.com/img/1c11/c329/85f64c116c8b49fb4a357815b4c2ec75?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=izKKKg65nC4F9qag4ItRrZgkMPSfy~XNCo13rFkrwRVYFi-xyJxb528Xuvc035JHNfWM6l5D9Wl2dX9F~wOzqNRDZUVzrQZ1DY8I1K~dtydL-9zk7DmhTgrRdsB0y9nHFnoGaeFiRGLypqhn2X-B3bIBn4JJ9684iMkLu-Mc1nfgIWPljd4MIiJilTBXKf4-pM00r7vDAADFNzPxD9qnRX8GB5R2Uy2yOgctUakYRiIaf0M~AAk1tlXa-y6~12ATQywB5Po5oLUJ7YQdlOoAAPUsvCQzeAFKhQbUG344tPZutUtJyTMxGXE3QO360voLAoGIIp1qtd~4USnKFdm8aw__' className="" loading="lazy"></img>
                            <p className="font-medium text-7xl">19</p>
                    </span>
                    <p className="text-center mt-28">Buku Rusak</p>
                </div>        
            </div>
        </div>

);

    // const OptimizedDashboardContent = React.memo(DashboardContent);
    export const OptimizedDashboardContent2 = React.memo(DashboardContent2);





