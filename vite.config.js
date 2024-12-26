import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({

    base: '/newsdeck/build/',
    build: {
        outDir: 'public/build', // Output ke public/build
        emptyOutDir: true, // Kosongkan folder sebelum build baru
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
            
        }),
    ],
   
});
