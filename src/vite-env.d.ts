/// <reference types="./app/types/global.d.ts" />
/// <reference types="vite/client" />

declare const __API__: string;
declare const __IS_DEV__: boolean;

interface ImportMetaEnv {
	readonly VITE_API_KEY: string

}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
