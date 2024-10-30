import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Sidebar, SidebarBody, SidebarLink } from '@/Components/ui/sidebar';
import { Head, Link, usePage } from '@inertiajs/react';
import { IconBrandTabler, IconUserBolt, IconSettings, IconArrowLeft, IconBook2, IconCirclePlusFilled, IconInfoCircleFilled, IconMenu3, IconUsersGroup } from '@tabler/icons-react';
import { METHODS } from 'http';
import { PropsWithChildren, ReactNode, useState } from 'react';

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
        const links = [ 
            {
                label: "Beranda",
                href: "dashboard",
                icon: (
                  <IconMenu3 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              },
              {
                label: "Lemari Buku",
                href: "#",
                icon: (
                  <IconBook2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              },
              {
                label: "Tambah Buku",
                href: "#",
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
              {
                label: "Keluar",
                href: "logout",
                icon: (
                  <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
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
                                    	alt="Avatar"
                                	/>
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

            	<main className="flex-1 p-4">
                	{children}
            	</main>
        	</div>
    	</div>
	);
}

// Komponen Logo untuk sidebar
function Logo() {
	return (
    	<Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black dark:text-white py-1 relative z-20">
        	<img className="w-10 me-1" src="img/buku.png"/>
        	<span className="font-medium mt-2">Perpustakaan Pesat</span>
    	</Link>
	);
}