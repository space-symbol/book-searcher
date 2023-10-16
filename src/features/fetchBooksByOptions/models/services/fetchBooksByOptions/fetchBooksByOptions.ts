import { createAsyncThunk } from '@reduxjs/toolkit';
import { Book } from 'entities/Book';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
	getSearchCategory,
	getSearchLimit,
	getSearchStartIndex,
	getSearchValue,
	getSortMethod
} from 'features/fetchBooksByOptions';
import { Category } from 'entities/Category';


interface FetchBooksListResult {
	items?: Book[];
	totalItems: number;
}

export const fetchBooksByOptions = createAsyncThunk<
	FetchBooksListResult,
	void,
	ThunkConfig<string>
>(
	'searchWithOptions/fetchBooksByOptions',
	async (_,thunkAPI) => {
		const {
			extra,
			rejectWithValue,
			getState
		} = thunkAPI;

		const startIndex = getSearchStartIndex(getState());
		const limit = getSearchLimit(getState());
		const searchValue = getSearchValue(getState());
		const category = getSearchCategory(getState());
		const method = getSortMethod(getState());

		let q = `subject:${category}`;
		if (category === Category.ALL) {
			q = `${searchValue}`;
		}

		try {
			const response = await extra.api.get('', {
				params: {
					q,
					startIndex,	
					'maxResults': limit,
					'orderBy': method,
					'printType': 'books'
				}
			});

			if (!response.data) {
				throw new Error();
			}
			return response.data;
		} catch (e) {
			return rejectWithValue('Error sending the request to API');
		}
	});
