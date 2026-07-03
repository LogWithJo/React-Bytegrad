import { create } from 'zustand';
import type { treckBagTasks } from '@/types/types';

export const useTreckBagData = create(() => ({
	treckBagData: [{ id: 1, name: 'Youssef learns React', isPacked: true }],
	ButtonsActions: ButtonsActions,
}));

export const ButtonsActions = {
	complete: {
		content: 'mark all as complete',
		func: (
			setTreckBagData: React.Dispatch<React.SetStateAction<treckBagTasks[]>>,
		) => {
			setTreckBagData((prev) =>
				prev.map((item) => ({ ...item, isPacked: true })),
			);
		},
	},
	inComplete: {
		content: 'mark all as incomplete',
		func: (
			setTreckBagData: React.Dispatch<React.SetStateAction<treckBagTasks[]>>,
		) => {
			setTreckBagData((prev) =>
				prev.map((item) => ({ ...item, isPacked: false })),
			);
		},
	},
	removeAll: {
		content: 'remove all',
		func: (
			setTreckBagData: React.Dispatch<React.SetStateAction<treckBagTasks[]>>,
		) => setTreckBagData([]),
	},
} as const;

export type ButtonsActions =
	(typeof ButtonsActions)[keyof typeof ButtonsActions];
