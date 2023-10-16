import { StateSchema } from 'app/providers/StoreProvider';

export const getSearchCategory = (state: StateSchema) => state.searchBooks.category;
export const getSearchValue = (state: StateSchema) => state.searchBooks.value;
export const getSortMethod = (state: StateSchema) => state.searchBooks.sortMethod;
export const getSearchIsLoading = (state: StateSchema) => state.searchBooks.isLoading;
export const getSearchBooks = (state: StateSchema) => state.searchBooks.books;
export const getSearchTotal = (state: StateSchema) => state.searchBooks.total;
export const getSearchHasMore = (state: StateSchema) => state.searchBooks.hasMore;
export const getSearchLimit = (state: StateSchema) => state.searchBooks.limit;
export const getSearchStartIndex = (state: StateSchema) => state.searchBooks.startIndex;
export const getSearchError = (state: StateSchema) => state.searchBooks.error;
