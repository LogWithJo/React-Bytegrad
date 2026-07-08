import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import comments from '@/data/CropComment-data.json';
import type { CommentDataType } from '@/types/types';

export const useCommentsData = create<CommentDataType>()(
	devtools(
		persist(
			(set) => ({
				comments: comments.feedbacks,
				categories: [
					'all',
					...[...new Set(comments.feedbacks.map((item) => item.company))],
				],
				selectCategory: 'all',
				setSelectCategory: (category) => {
					set(() => {
						return { selectCategory: category };
					});
				},
				toggleLikesCount: (id) => {
					set((state) => {
						const newComments = state.comments.map((comment) => {
							if (comment.id === id) {
								return {
									...comment,
									upvoteCount: {
										clicked: true,
										count: comment.upvoteCount.count + 1,
									},
								};
							}
							return comment;
						});
						return { comments: newComments };
					});
				},
				createNewComment: (text, company) => {
					set((state) => {
						const newComments = [
							...state.comments,
							{
								id: Date.now(),
								company,
								badgeLetter: company.charAt(0).toUpperCase(),
								upvoteCount: { clicked: false, count: 0 },
								daysAgo: 0,
								text,
							},
						];
						const newCategories = [...new Set([...state.categories, company])];
						return { comments: newComments, categories: newCategories };
					});
				},
			}),
			{
				name: 'cropComment-Storage',
			},
		),
	),
);
