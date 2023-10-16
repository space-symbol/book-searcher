import { classNames } from 'shared/lib/classNames/classNames.ts';
import cls from './BookList.module.css';
import { Button, ButtonTheme } from 'shared/ui/Button/Button.tsx';
import { Book } from '../../models/types/book.ts';
import { BookListItem } from '../BookListItem/BookListItem.tsx';
import { BookListItemSkeleton } from '../BookListItem/BookListItemSceleton.tsx';
import { memo } from 'react';

interface BookListProps {
	className?: string;
	books: Book[];
	isLoading: boolean;
	onLoadMoreButtonClick?: () => void;
	hasMore: boolean;
}
const getSkeletons = () => new Array(10)
	.fill(0)
	.map((_, index) => (
		<BookListItemSkeleton className={cls.card} key={index} />
	));

export const BookList = memo((props: BookListProps) => {
	const {
		className,
		books,
		onLoadMoreButtonClick,
		isLoading,
		hasMore,
	} = props;

	return (
		<div className={classNames(cls.container, [ className ], {})}>
			<div className={cls.BookList}>
				{books.length > 0 ?
					books.map((book: Book) => (
						<BookListItem
							key={`${book.id}${book.etag}`}
							book={book}
						/>
					)) : ''}
				{isLoading && getSkeletons()}
			</div>
			{books.length > 0 && hasMore ?
				<div className={cls.wrapper}>
					<Button
						className={cls.loadMore}
						onClick={onLoadMoreButtonClick}
						theme={ButtonTheme.OUTLINE}
					>
						Load more
					</Button>
				</div>: ''
			}
		</div>

	);
});

