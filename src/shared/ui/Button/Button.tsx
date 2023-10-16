import { ButtonHTMLAttributes } from 'react';
import { classNames, Modes } from 'shared/lib/classNames/classNames';
import cls from './Button.module.css';

export enum ButtonTheme {
	CLEAR = 'clear',
	OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string,
	theme?: ButtonTheme
}

export const Button = (props: ButtonProps) => {
	const {
		className,
		theme = ButtonTheme.CLEAR,
		children,
		...otherProps
	} = props;

	const modes: Modes = {
		[cls[theme]]: theme
	};

	return (
		<button
			className={classNames(cls.Button, [ className ], modes)}
			{...otherProps}
		>
			{children}
		</button>
	);
};

