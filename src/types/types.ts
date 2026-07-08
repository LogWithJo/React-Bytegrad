
export interface treckBagTasks {
	id: number;
	name: string;
	isPacked: boolean;
}

export interface treckBagType {
	treckBagData: treckBagTasks[];
	createNewTask: (name: string) => void;
	completeAll: () => void;
	inCompleteAll: () => void;
	removeAll: () => void;
	toggleTask: (id: number) => void;
}

export const SortType = {
	packed: 'packed',
	unPacked: 'unpacked',
} as const;

export type SortType = (typeof SortType)[keyof typeof SortType];

export const ButtonsActions = {
	complete: {
		content: 'mark all as complete',
		func: (data: {
			removeAll: () => void;
			completeAll: () => void;
			inCompleteAll: () => void;
		}) => {
			data.completeAll();
		},
	},
	inComplete: {
		content: 'mark all as incomplete',
		func: (data: {
			removeAll: () => void;
			completeAll: () => void;
			inCompleteAll: () => void;
		}) => {
			data.inCompleteAll();
		},
	},
	removeAll: {
		content: 'remove all',
		func: (data: {
			removeAll: () => void;
			completeAll: () => void;
			inCompleteAll: () => void;
		}) => {
			data.removeAll();
		},
	},
} as const;

export type ButtonsActions =
	(typeof ButtonsActions)[keyof typeof ButtonsActions];

export interface CommentType {
	id: number | string;
	company: string;
	badgeLetter: string | number;
	upvoteCount: { clicked: boolean; count: number };
	daysAgo: number;
	text: string;
}

export interface CommentDataType {
	comments: CommentType[];
	categories: string[];
	selectCategory: string;
	setSelectCategory: (category: string) => void;
	toggleLikesCount: (id: number) => void;
	createNewComment: (text: string, company: string) => void;
}
