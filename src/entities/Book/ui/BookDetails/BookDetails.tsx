import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton.tsx';
import DefaultIcon from 'shared/assets/icons/default-book-icon.svg';
import parse from 'html-react-parser';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch.ts';
import { Button, ButtonTheme } from 'shared/ui/Button/Button.tsx';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx';
import { fetchBookById } from '../../models/services/fetchBookById/fetchBookById.ts';
import { bookDetailReducer } from '../../models/slice/bookDetailsSlice.tsx';
import { getBookDetailsData, getBookDetailsError, getBookDetailsIsLoading } from '../../models/selectors/bookDetailsSelectors.ts';
import cls from './BookDetails.module.css';


interface BookDetailsProps {
	className?: string;
	id: string
}

const initialReducers: ReducersList = {
	bookDetails: bookDetailReducer
};
export const BookDetails = (props: BookDetailsProps) => {
	const {
		className, id
	} = props;
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getBookDetailsIsLoading);
	const book = useSelector(getBookDetailsData);
	const error = useSelector(getBookDetailsError);
	const navigate = useNavigate();


	useEffect(() => {
		dispatch(fetchBookById(id));
	}, [ dispatch, id ]);
	let content;

	const onBackButtonClick = () => {
		navigate(-1);
	};

	if (isLoading) {
		content = (
			<div className={cls.container}>
				<div className={cls.imageWrapper}>
					<Skeleton height={350} width={250} />
				</div>
				<div className={cls.infoContainer}>
					<div className={cls.info}>
						<Skeleton className={cls.categories} height={'0.9em'} width={'100%'} />
						<Skeleton className={cls.title} />
						<Skeleton className={cls.authors} height={'0.8em'} width={'100%'} />
						<Skeleton className={cls.description} width={'100%'}/>
						<Button
						className={cls.back}
						onClick={onBackButtonClick}
						theme={ButtonTheme.OUTLINE}>
						Back
					</Button>
					</div>
				
				</div>
			</div>

		);

	} else if (error) {
		content = (
			<span>An error occurred while fetching data</span>
		);
	} else {
		const imgUrl = book?.volumeInfo?.imageLinks?.thumbnail || book?.volumeInfo?.imageLinks?.smallThumbnail || DefaultIcon;
		const description = book?.volumeInfo?.description;
		const title = book?.volumeInfo?.title;
		const authors = book?.volumeInfo?.authors?.join(', ');

		content = (
			<div className={cls.container}>
				<div className={cls.imageWrapper}>
					<img alt={book?.volumeInfo?.title} src={imgUrl} className={cls.img} />
				</div>
				<div className={cls.infoContainer}>
					<div className={cls.info}>
					<span className={cls.categories}>{book?.volumeInfo?.categories?.join(' / ') || 'No categories'}</span>
					<h2 className={cls.title}>{title || 'Not title'}</h2>
					<span className={cls.authors}>{ authors || 'No authors'}</span>
					<div className={classNames(cls.description, [], { [cls.empty]: !description })}>{description ? parse(description): 'No description'}</div>
					<Button
						className={cls.back}
						onClick={onBackButtonClick}
						theme={ButtonTheme.OUTLINE}>
						Back
					</Button>
					</div>
				</div>
			</div>
		)
		;
	}
	return (
		<DynamicModuleLoader
			reducers={initialReducers}>
			<div className={classNames(cls.BookDetails, [ className ], {})}>
				{content}
			</div>
		</DynamicModuleLoader>

	);
};

