import { AxiosInstance } from 'axios';
import { BookDetailSchema } from 'entities/Book';
import { SearchBooksSchema } from 'features/fetchBooksByOptions';
import { NavigateOptions, To } from 'react-router-dom';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

export interface StateSchema {
	searchBooks: SearchBooksSchema;
	bookDetails?: BookDetailSchema;
}

export type StateSchemaKey = keyof StateSchema


export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
	reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
	navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
