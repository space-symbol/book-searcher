import { createSlice } from '@reduxjs/toolkit';
import { BookDetailSchema } from '../types/bookDetailSchema.ts';
import { fetchBookById } from 'entities/Book/models/services/fetchBookById/fetchBookById.ts';

const initialState: BookDetailSchema = {
	books: undefined,
	isLoading: false,
	error: undefined
};

const bookDetailsSlice = createSlice({
	name: 'booksDetails',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBookById.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchBookById.fulfilled, (state, action) => {
				state.books = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchBookById.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;

			});
	}
});

export const {
	actions: bookDetailActions,
	reducer: bookDetailReducer
} = bookDetailsSlice;
