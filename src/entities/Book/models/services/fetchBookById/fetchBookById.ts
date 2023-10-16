import { createAsyncThunk } from '@reduxjs/toolkit';
import { Book } from 'entities/Book';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchBookById = createAsyncThunk<
	Book,
	string,
	ThunkConfig<string>
>('book/fetchBookById',
	async (bookId, thunkAPI) => {
		const {
			extra,
			rejectWithValue,
		} = thunkAPI;

		try {
			const response = await extra.api.get(bookId);
			if (!response.data) {
				throw new Error();
			}

			return response.data;
		}catch (e){
			console.log(e);
			rejectWithValue('Error');
		}
	}
);
