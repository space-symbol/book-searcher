import { Category } from 'entities/Category';
import { SortMethod } from 'entities/Sorting';
import { Book } from 'entities/Book';

export interface SearchBooksSchema {
	value: string;
	category: Category;
	sortMethod: SortMethod;
	isLoading: boolean;
	startIndex: number;
	limit: number;
	books: Book[];
	total: number;
	hasMore: boolean;
	error: string;
}


