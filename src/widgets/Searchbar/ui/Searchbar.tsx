import { SearchAndOptions } from 'features/fetchBooksByOptions/ui/SearchAndOptions.tsx';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Searchbar.module.css';

interface SearchbarProps {
	className?: string,
}

export const Searchbar = (props: SearchbarProps) => {
	const {
		className,
	} = props;

	return (
		<header className={classNames(cls.Searchbar, [ className ], {})}>
				<h2 className={cls.title}>Search for books</h2>
				<SearchAndOptions/>
		</header>
	);
};

