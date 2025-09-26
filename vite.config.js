import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/sass/auth/auth.scss',
                'resources/js/auth/auth.js',
                'resources/js/app.js',
                'resources/js/pages/tabs/calander.js',
                'resources/js/pages/settings.js'
            ],
            refresh: true,
        }),
    ],
});
