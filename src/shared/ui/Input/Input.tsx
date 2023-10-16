import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { Button } from 'shared/ui/Button/Button.tsx';
import { classNames, Modes } from 'shared/lib/classNames/classNames.ts';
import cls from './Input.module.css';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onKeyDown'>

interface InputProps extends HTMLInputProps {
	className?: string;
	wrapperClassName?: string;
	value?: string | number;
	readOnly?: boolean;
	onChange?: (value: string) => void,
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void,
	onIconClick?: () => void
	LeftIcon?: SVG
	RightIcon?: SVG
}

export const Input = (props: InputProps) => {
	const {
		className,
		value,
		onChange,
		onKeyDown,
		onIconClick,
		readOnly,
		LeftIcon,
		RightIcon,
		...otherProps
	} = props;

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.value);
	};
	const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
		onKeyDown?.(event);
	};

	const onIconClickHandler = () => {
		!readOnly && onIconClick?.();
	};

	const modes: Modes = {
		[cls.with_icon]: Boolean(LeftIcon|| RightIcon),
		[cls.readOnly]: readOnly
	};

	return (
		<div className={classNames(cls.Wrapper, [className], modes)}>
			{LeftIcon &&
          <Button onClick={onIconClickHandler} className={classNames(cls.left, [cls.searchButton])}>
              <LeftIcon className={cls.icon}/>
          </Button>
			}
			{RightIcon &&
          <Button onClick={onIconClickHandler} className={classNames(cls.right, [cls.searchButton])}>
              <RightIcon className={cls.icon}/>
          </Button>
			}

			<input
				className={cls.input}
				value={value}
				onKeyDown={onKeyDownHandler}
				onChange={onChangeHandler}
				readOnly={readOnly}
				{...otherProps}
			/>

		</div>

	);
};

