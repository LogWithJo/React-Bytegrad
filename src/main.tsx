import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { HashRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import App from './App.tsx';
import { AppProvider } from './context/AppContext.tsx';

createRoot(document.getElementById('youssef')!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="dark">
			<HashRouter>
				<AppProvider>
					<Toaster />
					<App />
				</AppProvider>
			</HashRouter>
		</ThemeProvider>
	</StrictMode>,
);
