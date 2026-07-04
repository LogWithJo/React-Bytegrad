import React from 'react';
import FancyCounter from '@/pages/FancyCounter/FancyCounter';
import TreckBag from '@/pages/TreckBag/TreckBag';
import WordAnalytics from '@/pages/Word-Analytics/WordAnalytics';
import Zustand from '@/pages/zustand/Zustand';

interface appContextType {
	info: { id: number; name: string; url?: string; element: React.ReactNode }[];
}

const wordAnalyticsContext = React.createContext<appContextType | undefined>(
	undefined,
);

export function AppProvider({ children }: { children: React.ReactNode }) {
	const baseUrl = 'https://logwithjo.github.io/React-Bytegrad/#/';
	const info = [
		{
			id: 1,
			name: 'fancyCounter',
			url: `${baseUrl}fancyCounter`,
			element: <FancyCounter />,
		},
		{
			id: 7,
			name: 'wordAnalytics',
			url: `${baseUrl}wordAnalytics`,
			element: <WordAnalytics />,
		},
		{ id: 8, name: 'zustand', url: `${baseUrl}zustand`, element: <Zustand /> },
		{ id: 6, name: 'trekbag', url: `${baseUrl}trekbag`, element: <TreckBag /> },
		{ id: 2, name: 'evento', url: `${baseUrl}evento` },
		{ id: 3, name: 'corp-comment', url: `${baseUrl}corp-comment` },
		{ id: 4, name: 'petsoft', url: `${baseUrl}petsoft` },
		{ id: 5, name: 'rmtdev', url: `${baseUrl}rmtdev` },
	];

	return (
		<wordAnalyticsContext.Provider value={{ info }}>
			{children}
		</wordAnalyticsContext.Provider>
	);
}

export default function AppData() {
	const context = React.useContext(wordAnalyticsContext);

	if (!context) {
		throw new Error(`error ${context}`, { cause: context });
	}

	return context;
}
