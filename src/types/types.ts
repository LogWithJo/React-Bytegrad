export interface treckBagTasks {
	id: number;
	name: string;
	isPacked: boolean;
}

export interface treckBagType {
	treckBagData: treckBagTasks[];
	setTreckBagData: React.Dispatch<React.SetStateAction<treckBagTasks[]>>;
}

export const SortType = {
	packed: 'packed',
	unPacked: 'unpacked',
} as const;

export type SortType = (typeof SortType)[keyof typeof SortType];

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
