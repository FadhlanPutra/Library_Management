import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '0.0.0.0',      // Menggunakan semua alamat IP
        port: 5173,           // Port default Vite
        strictPort: true,
        hmr: {
            host: '202.100.16.27', // Alamat IP lokal Anda
            port: 5173,
        },
        proxy: {
            '/api': {
                target: 'http://202.100.16.27:8080',
                changeOrigin: true,
            },
        },
    },
});
