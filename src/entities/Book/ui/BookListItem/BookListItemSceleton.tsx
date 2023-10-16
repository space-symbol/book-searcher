import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './BookListItem.module.css';

interface BookListItemSkeletonProps {
	className?: string;
}

export const BookListItemSkeleton = (props: BookListItemSkeletonProps) => {
	const { className} = props;

	return (
		<div className={classNames(cls.BookListItem, [className], {})}>
			<Card className={cls.bookCard}>
				<div className={cls.imageWrapper}>
					<Skeleton width={200} height={200} className={cls.img} />
				</div>
				<div className={cls.infoContainer}>
					<Skeleton width={'70%'} height={16} />
					<Skeleton width={'100%'} height={16} className={cls.title} />
					<Skeleton width={'100%'} height={16} className={cls.title} />
				</div>
			</Card>
		</div>
	);
};
