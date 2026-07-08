import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { treckBagType } from '@/types/types';

export const usetreckBagData = create<treckBagType>()(
	devtools(
		persist(
			(set) => ({
				treckBagData: [],
				createNewTask: (name) => {
					set((state) => {
						const newTasks = [
							...state.treckBagData,
							{ id: Date.now(), name, isPacked: false },
						];
						return { treckBagData: newTasks };
					});
				},
				completeAll: () => {
					set((state) => ({
						treckBagData: state.treckBagData.map((item) => ({
							...item,
							isPacked: true,
						})),
					}));
				},
				inCompleteAll: () => {
					set((state) => ({
						treckBagData: state.treckBagData.map((item) => ({
							...item,
							isPacked: false,
						})),
					}));
				},
				removeAll: () => {
					set({ treckBagData: [] });
				},
				toggleTask: (id) => {
					set((state) => {
						return {treckBagData: [...state.treckBagData.map(item => ({id: item.id, name: item.name, isPacked: item.id === id ? !item.isPacked : item.isPacked}))]}
					});
				},
			}),
			{ name: 'treckbag-storage' },
		),
	),
);
