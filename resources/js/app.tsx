import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, Root } from 'react-dom/client'; // Import Root
import NProgress from 'nprogress';
import { router } from '@inertiajs/react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
export const idLoading = "loading";

// Deklarasikan root di luar untuk mencegah duplikasi
// let root: Root | null = null;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        // Inisialisasi root hanya jika belum ada
        // if (!root) {
            const root = createRoot(el);
        // }

        // Event listener untuk memulai loading
        // router.on('start', () => {
        //     NProgress.start();
        //     toast.loading("Memuat...", { toastId: idLoading }); // Tampilkan toast loading
        // });

        // // Event listener untuk menyelesaikan loading
        // router.on('finish', () => {
        //     NProgress.done();
        //     toast.dismiss(idLoading); // Hapus toast loading
        //     toast.success("Halaman dimuat berhasil!"); // Tampilkan pesan sukses
        // });

        // Render aplikasi ke root yang sudah ada
        root.render(
            <>
                <ToastContainer draggable limit={1} />
                <App {...props} />
            </>
        );
    },
    progress: {
        includeCSS: true,
        showSpinner: true,
        color: 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);',
    },
});
