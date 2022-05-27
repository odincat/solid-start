import { defineConfig } from 'vite';

import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import Pages from 'vite-plugin-pages';
import AutoImport from 'unplugin-auto-import/vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        solidPlugin(),
        tsconfigPaths(),
        Pages({
            dirs: 'src/pages',
            importMode: 'sync',
        }),
        AutoImport({
            include: [/\.[tj]sx?$/],
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
        visualizer(),
    ],
    build: {
        target: 'esnext',
        polyfillDynamicImport: false,
    },
});
