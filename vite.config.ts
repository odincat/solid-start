import { defineConfig } from 'vite';

import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import Pages from 'vite-plugin-pages';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
    plugins: [
        solidPlugin(),
        tsconfigPaths(),
        Pages({
            dirs: 'src/pages',
            importMode: 'async',
        }),
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.md$/, // .md
            ],
            dts: true,
            imports: [
                'solid-js',
                'solid-app-router',
                {
                    'solid-meta': [
                        ['Title', 'MetaTitle'],
                        ['Meta', 'MetaTag'],
                        ['Link', 'MetaLink'],
                        'MetaProvider',
                    ],
                },
            ],
        }),
    ],
    build: {
        target: 'esnext',
        polyfillDynamicImport: false,
    },
});
