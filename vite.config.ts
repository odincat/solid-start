import { defineConfig } from 'vite';

import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import AutoImport from 'unplugin-auto-import/vite';

import checker from 'vite-plugin-checker';
import { qrcode } from 'vite-plugin-qrcode';

import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        solidPlugin(),
        tsconfigPaths(),
        AutoImport({
            include: [/\.[tj]sx?$/],
            dts: true,
            imports: [
                'solid-js',
                {
                    'solid-meta': [
                        ['Title', 'MetaTitle'],
                        ['Meta', 'MetaTag'],
                        ['Link', 'MetaLink'],
                        'MetaProvider',
                    ],
                    'solid-tiny-router': [
                        'createRouterTree',
                        'useRouter',
                        'Router',
                        'Link',
                    ],
                },
            ],
        }),

        checker({ typescript: true, overlay: false }),
        qrcode(),

        visualizer(),
    ],
    build: {
        target: 'esnext',
        polyfillDynamicImport: false,
    },
});
