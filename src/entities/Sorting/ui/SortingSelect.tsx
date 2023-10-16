import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select.tsx';
import { SortMethod } from '../model/types/sortMethod.ts';
import cls from './SortingSelect.module.css';

interface SortingSelectProps {
	className?: string;
	value?: SortMethod;
	onChange?: (value: SortMethod) => void;
	readOnly?: boolean;
}

const options: Array<SelectOption<SortMethod>> = [
	{value: SortMethod.RELEVANCE, content: SortMethod.RELEVANCE},
	{value: SortMethod.NEWEST, content: SortMethod.NEWEST},
];

export const SortingSelect = (props: SortingSelectProps) => {
	const {
		className,
		value,
		onChange,
		readOnly
	} = props;

	const onChangeHandler = (value: string) => {
		onChange?.(value as SortMethod);
	};

	return (
		<Select
			className={classNames(cls.SortingSelect, [ className ])}
			label={'Sort by'}
			value={value}
			onChange={onChangeHandler}
			readOnly={readOnly}
			options={options}
		/>
	);
};

