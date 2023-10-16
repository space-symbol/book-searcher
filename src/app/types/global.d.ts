/// <reference types="vite/client" />

type SVG = React.FC<React.SVGProps<SVGSVGElement>>

type DeepPartial<T> = T extends object ? {
	[P in keyof T]?: DeepPartial<T[P]>;
} : T;

