import { Book } from 'entities/Book';

export interface BookDetailSchema {
	books?: Book;
	isLoading?: boolean;
	error?: string;
}
