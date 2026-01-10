import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    server: {
        host: true
    },
    preview: {
        host: true
    },
    vite: {
        server: {
            allowedHosts: ['w4cw84cwkwskc0cw4c80gs8k.170.64.136.227.sslip.io']
        },
        preview: {
            allowedHosts: ['w4cw84cwkwskc0cw4c80gs8k.170.64.136.227.sslip.io']
        }
    }
});
