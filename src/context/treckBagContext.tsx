import React from 'react';
import type { treckBagTasks, treckBagType } from '@/types/types';

const treckBagContext = React.createContext<treckBagType | undefined>(
	undefined,
);

export function TreckBagProvider({ children }: { children: React.ReactNode }) {
	const [treckBagData, setTreckBagData] = React.useState<treckBagTasks[]>(
		localStorage.getItem('data')
			? JSON.parse(localStorage.getItem('data'))
			: [{ id: 1, name: 'Youssef learns React', isPacked: true }],
	);

	return (
		<treckBagContext.Provider value={{ treckBagData, setTreckBagData }}>
			{children}
		</treckBagContext.Provider>
	);
}

export default function TreckBagData() {
	const context = React.useContext(treckBagContext);

	if (!context) {
		throw new Error(`error ${context}`, { cause: context });
	}

	return context;
}
