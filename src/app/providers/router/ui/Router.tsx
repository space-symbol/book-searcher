import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/RouteConfig/RouteConfig.tsx';
import { Suspense } from 'react';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader.tsx';

export const AppRouter = () => {

	return (
		<Routes>
			{Object.values(RouteConfig).map(({ path, element }) => (
					<Route
						path={path}
						key={path}
						element={
							<Suspense fallback={<PageLoader/>}>
									{element}
							</Suspense>
						}
					/>
				)
			)}
		</Routes>
	);
};

