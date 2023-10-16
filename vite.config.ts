import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfig from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	build: {
	},
	plugins: [
		react(),
		svgr({ include: '**/*.svg?react'}),
		tsConfig()
	],
	define: {
		__API__: JSON.stringify('https://www.googleapis.com/books/v1/volumes'),
		__IS_DEV__: true,
	},
	server: {
		port: 5000
	},
	preview: {
		port: 5000
	},
	envDir: './src'
});
