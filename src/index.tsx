import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './app/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
);
