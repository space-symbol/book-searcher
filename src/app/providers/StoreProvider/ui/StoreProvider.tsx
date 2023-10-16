import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'shared/config/StoreConfig/StateSchema.ts';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}


export const StoreProvider = (props: StoreProviderProps) => {
	const {
		children,
		asyncReducers,
		initialState
	} = props;

	const store = createReduxStore(
		initialState as StateSchema,
		asyncReducers as ReducersMapObject<StateSchema>
	);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

