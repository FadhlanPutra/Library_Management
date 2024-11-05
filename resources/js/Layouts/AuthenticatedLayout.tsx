import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Sidebar, SidebarBody, SidebarLink, SidebarLinkLogout } from '@/Components/ui/sidebar';
import withMemo from '@/lib/withMemo';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { IconBrandTabler, IconUserBolt, IconSettings, IconBook2, IconCirclePlusFilled, IconInfoCircleFilled, IconMenu3, IconUsersGroup, IconLogout2 } from '@tabler/icons-react';
import { METHODS } from 'http';
import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import { memo } from 'react';
import { toast } from 'react-toastify';
import { notiflogout } from '../Pages/Auth/notiftoast';
import NProgress from 'nprogress';


const Authenticated = React.memo(function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    const formattedDate = currentTime.toLocaleDateString("id-ID", {
  
      weekday: "long", // Opsi untuk nama hari
      month: "long", // Opsi untuk nama bulan
      day: "numeric", // Opsi untuk tanggal
      year: "numeric" // Opsi untuk tahun
    });

    const formattedTime = currentTime.toLocaleTimeString("id-ID", {
  
      hour: "2-digit", // Opsi untuk jam
      minute: "2-digit", // Opsi untuk menit
      // second: "2-digit", // Opsi untuk detik
    });

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
        const links = [ 
            {
                label: "Beranda",
                href: "/dashboard",
                icon: (
                  <IconMenu3 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              },
              {
                label: "Lemari Buku",
                href: "/books",
                icon: (
                  <IconBook2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              },
              {
                label: "Tambah Buku",
                href: "books/create",
                icon: (
                  <IconCirclePlusFilled className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              },
              {
                label: "Informasi",
                href: "#",
                icon: (
                  <IconInfoCircleFilled className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              },
              {
                label: "Anggota",
                href: "#",
                icon: (
                  <IconUsersGroup className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              },
              {
                label: "Karyawan",
                href: "#",
                icon: (
                  <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              },
              {
                label: "Pengaturan",
                href: "#",
                icon: (
                  <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              },
            ];
          const [open, setOpen] = useState(false);
    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-neutral-900">
        	{/* Sidebar */}
        	<Sidebar open={open} setOpen={setOpen}>
            	<SidebarBody className="justify-between gap-10">
                	<div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    	<Logo />
                    	<div className="mt-8 flex flex-col gap-2">
                        	{links.map((link, idx) => (
                            	<SidebarLink key={idx} link={link} />
                        	))}
                    	</div>
                	</div>
                  
                    <SidebarLinkLogout onClick={notiflogout}
                      link={{
                        label: "Keluar",
                        href: "logout",
                        icon: (
                          <IconLogout2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                        ),
                      }}
                      />                	
                      <div>
                    	<SidebarLink
                        	link={{
                            	label: user.name,
                            	href: "profile",
                            	icon: (
                                	<img
                                    	src="https://assets.aceternity.com/manu.png"
                                    	className="h-7 w-7 flex-shrink-0 rounded-full"
                                    	width={50}
                                    	height={50}
                                    	alt="Avatar"/>
                            	),
                        	}}
                    	/>
                	</div>
            	</SidebarBody>
        	</Sidebar>

        	{/* Konten Utama */}
        	<div className="flex-1 flex flex-col">
            	<Head title="Dashboard" />

            	{header && (
                	<header className="bg-white shadow dark:bg-neutral-800">
                    	<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-gray-800 dark:text-white">
                        	{header}
                    	</div>
                	</header>
            	)}

              <nav className="bg-white p-4 flex flex-row justify-between drop-shadow-lg">
                <div className="">
                  <input type="text" className="rounded-lg border-gray-500 focus:ring-opacity-50" placeholder="Cari Buku..." />
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <h1 className="">
                    {formattedDate}, {formattedTime}
                    </h1>
                    <Dropdown>
                      <Dropdown.Trigger>
                        <button className="flex item-center focus:outline-none">
                          <img src="https://assets.aceternity.com/manu.png" alt="" className="w-10 h-10 rounded-full"/>
                        </button>
                      </Dropdown.Trigger>
                      <Dropdown.Content>
                        <Dropdown.Link href={route("profile.edit")}>
                          <span className="block text-sm text-gray-700 dark:text-white">
                            {user.name}
                          </span>
                        </Dropdown.Link>
                      </Dropdown.Content>
                    </Dropdown>
                </div>
              </nav>

            	<main className="flex-1 p-4">
                	{children}
            	</main>
        	</div>
    	</div>
	);
})



// Komponen Logo untuk sidebar
function Logo() {
	return (
    	<Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black dark:text-white py-1 relative z-20">
        	<img className="w-10 me-1" src="img/buku.webp"/>
        	<span className="font-medium mt-2">Perpustakaan Pesat</span>
    	</Link>
	);
}

export default Authenticated;
