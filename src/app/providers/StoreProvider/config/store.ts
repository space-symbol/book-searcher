import { $api } from 'shared/api/api.ts';
import { StateSchema, ThunkExtraArg } from 'shared/config/StoreConfig/StateSchema.ts';
import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { searchBooksReducer } from 'features/fetchBooksByOptions/models/slice/searchBooksSlice.ts';
import { createReducerManager } from '../config/reducerManager.ts';

export const createReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>
) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		searchBooks: searchBooksReducer,
	};
	const reducerManager = createReducerManager(rootReducers);

	const extraArgs: ThunkExtraArg = {
		api: $api
	};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({
			thunk: {
				extraArgument: extraArgs
			}
		})
	});

	// @ts-ignore
	store.reducerManager = reducerManager;
	return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
