import { useSelector } from 'react-redux';
import { fetchBooksByOptions } from 'features/fetchBooksByOptions';
import { searchBooksActions } from 'features/fetchBooksByOptions/models/slice/searchBooksSlice.ts';
import {
	getSearchBooks,
	getSearchError,
	getSearchHasMore,
	getSearchLimit,
	getSearchIsLoading,
	getSearchStartIndex,
	getSearchTotal
} from 'features/fetchBooksByOptions/models/selectors/searchSelectors.ts';
import { BookList } from 'entities/Book/ui/BookList/BookList.tsx';
import { Page } from 'shared/ui/Page/Page.tsx';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch.ts';
import cls from './BooksPage.module.css';
import { useEffect } from 'react';

interface BooksPageProps {
	className?: string,
}

const BooksPage = ({ className }: BooksPageProps) => {
	const dispatch = useAppDispatch();
	const books = useSelector(getSearchBooks);
	const total = useSelector(getSearchTotal);
	const isLoading = useSelector(getSearchIsLoading);
	const error = useSelector(getSearchError);
	const hasMore = useSelector(getSearchHasMore);
	const limit = useSelector(getSearchLimit);
	const startIndex = useSelector(getSearchStartIndex);
	const onLoadNextPart = () => {
		dispatch(searchBooksActions.setStartIndex(startIndex + limit));
		dispatch(fetchBooksByOptions());
	};


	return (
		<Page className={classNames(cls.BooksPage, [ className ], {})}>
			{total > 0 ? <span className={cls.totalResults}>Found {total} results</span> : null}
			{error ? (
					<span>{error}</span>
				) :
				<BookList
					books={books}
					isLoading={isLoading}
					onLoadMoreButtonClick={onLoadNextPart}
					hasMore={hasMore}
				/>}
		</Page>
	);
};

export default BooksPage;
