import React from 'react';

interface wordAnalyticsType {
	text: string;
	setText: React.Dispatch<React.SetStateAction<string>>;
}

const wordAnalyticsContext = React.createContext<wordAnalyticsType | undefined>(
	undefined,
);

export function WordAnalyticsProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [text, setText] = React.useState('');

	return (
		<wordAnalyticsContext.Provider value={{ text, setText }}>
			{children}
		</wordAnalyticsContext.Provider>
	);
}

export default function WordData() {
	const context = React.useContext(wordAnalyticsContext);

	if (!context) {
		throw new Error(`error ${context}`, { cause: context });
	}

	return context;
}
