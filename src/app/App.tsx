import { Suspense } from 'react';
import { Searchbar } from 'widgets/Searchbar';
import { AppRouter } from './providers/router';

function App() {
	return (
		<div className="app">
			<Suspense fallback={''}>
				<Searchbar />
				<AppRouter />
			</Suspense>
		</div>
	);
}

export default App;
