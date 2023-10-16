import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select.tsx';
import { Category } from '../model/types/category.ts';
import cls from './CategorySelect.module.css';

interface CategorySelectProps {
	className?: string;
	value?: Category;
	onChange?: (value: Category) => void;
	readOnly?: boolean;
}

const options: Array<SelectOption<Category>> = [
	{value: Category.ALL, content: Category.ALL},
	{value: Category.ART, content: Category.ART},
	{value: Category.BIOGRAPHY, content: Category.BIOGRAPHY},
	{value: Category.MEDICAL, content: Category.MEDICAL},
	{value: Category.HISTORY, content: Category.HISTORY},
	{value: Category.POETRY, content: Category.POETRY},
	{value: Category.COMPUTERS, content: Category.COMPUTERS},
];

export const CategorySelect = (props: CategorySelectProps) => {
	const {
		className,
		value,
		onChange,
		readOnly
	} = props;

	const onChangeHandler = (value: string) => {
		onChange?.(value as Category);
	};

	return (
		<Select
			className={classNames(cls.CategorySelect, [ className ])}
			label={'Categories'}
			value={value}
			onChange={onChangeHandler}
			readOnly={readOnly}
			options={options}
		/>
	);
};

