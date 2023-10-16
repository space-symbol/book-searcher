import { RouteProps } from 'react-router-dom';
import { BooksPage } from 'pages/BooksPage';
import { BookDetailsPage } from 'pages/BookDetailsPage';

export enum AppRoutes {
	BOOKS = 'books',
	BOOK_DETAILS = 'book_details'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.BOOKS]: '/',
	[AppRoutes.BOOK_DETAILS]: '/book/' // + id книги,
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.BOOKS]: {
		path: RoutePath.books,
		element: <BooksPage />
	},

	[AppRoutes.BOOK_DETAILS]: {
		path: `${RoutePath.book_details}:id`,
		element: <BookDetailsPage />
	}
};
