import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch.ts';
import { classNames, Modes } from 'shared/lib/classNames/classNames';
import { SearchInput } from 'entities/Search';
import { Category, CategorySelect } from 'entities/Category';
import { SortMethod, SortingSelect } from 'entities/Sorting';
import {
	getSortMethod,
	getSearchValue,
	getSearchCategory,
	getSearchIsLoading,
} from '../models/selectors/searchSelectors.ts';
import { searchBooksActions } from '../models/slice/searchBooksSlice.ts';
import { fetchBooksByOptions } from '../models/services/fetchBooksByOptions/fetchBooksByOptions.ts';
import cls from './SearchAndOptions.module.css';

interface SearchWithSettingsProps {
	className?: string,
}


export const SearchAndOptions = ({ className }: SearchWithSettingsProps) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const value = useSelector(getSearchValue);
	const category = useSelector(getSearchCategory);
	const sortMethod = useSelector(getSortMethod);
	const isLoading = useSelector(getSearchIsLoading);

	const onChangeSearchValue = (value: string) => {
		dispatch(searchBooksActions.setSearchValue(value));
	};
	const onChangeCategory = (category: Category) => {
		dispatch(searchBooksActions.setCategory(category));
	};
	const onChangeSortMethod = (method: SortMethod) => {
		dispatch(searchBooksActions.setSortBy(method));
	};
	const onEnterKey = () => {
		navigate('/');
		dispatch(searchBooksActions.setItems([]));
		dispatch(searchBooksActions.setStartIndex(0));
		dispatch(fetchBooksByOptions());
	};

	const modes: Modes = {
		[cls.isLoading]: isLoading
	};

	return (
		<form onSubmit={(e) => { 
			e.preventDefault(); 
			onEnterKey();
			}} className={classNames(cls.SearchWithOptions, [ className ], modes)}>
			<SearchInput
				placeholder={'Find the book'}
				value={value}
				onChange={onChangeSearchValue}
				onEnterKey={onEnterKey}
				readOnly={isLoading}
				autoFocus
			/>
			<div className={cls.settings}>
				<CategorySelect
					value={category}
					onChange={onChangeCategory}
					readOnly={isLoading}
				/>
				<SortingSelect
					value={sortMethod}
					onChange={onChangeSortMethod}
					readOnly={isLoading}
				/>
			</div>
		</form>
	);
};
