import { useNavigate } from 'react-router-dom';
import { Card } from 'shared/ui/Card/Card.tsx';
import { classNames } from 'shared/lib/classNames/classNames.ts';
import DefaultIcon from 'shared/assets/icons/default-book-icon.svg';
import { RoutePath } from 'shared/config/RouteConfig/RouteConfig.tsx';
import { Book } from '../../models/types/book.ts';
import cls from './BookListItem.module.css';

interface BookListItemProps {
	className?: string,
	book: Book;
}

export const BookListItem = (props: BookListItemProps) => {
	const {
		className,
		book
	} = props;

	const navigate = useNavigate();
	const onOpenBook = () => {
		navigate(`${RoutePath.book_details}${book.id}`);
	};
	const imgUrl = book?.volumeInfo?.imageLinks?.thumbnail || book?.volumeInfo?.imageLinks?.smallThumbnail || DefaultIcon;

	const { volumeInfo } = book;
	return (
		<button onClick={onOpenBook} className={classNames(cls.BookListItem, [ className ], {})}>
			<Card className={cls.bookCard}>
				<div className={cls.imageWrapper}>
					<img alt={volumeInfo?.title} src={imgUrl} className={cls.img} />
				</div>
				<div className={cls.infoContainer}>
					<span className={cls.categories}>{volumeInfo?.categories?.[0]}</span>
					<span className={cls.title}>{volumeInfo?.title}</span>
					<span className={cls.authors}>{volumeInfo?.authors?.join(', ')}</span>
				</div>
			</Card>
		</button>
	);
};

