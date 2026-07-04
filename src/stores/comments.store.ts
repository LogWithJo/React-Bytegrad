import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import comments from '@/data/CropComment-data.json';

export interface CommentType {
	id: number | string;
	company: string;
	badgeLetter: string | number;
	upvoteCount: {clicked: boolean, count: number};
	daysAgo: number;
	text: string;
}

interface CommentDataType {
	comments: CommentType[];
    toggleLikesCount: (id: number) => void
}

export const useCommentsData = create<CommentDataType>()(
	devtools(
		persist(
			(set) => ({
				comments: comments.feedbacks,
                toggleLikesCount: (id) => {
                    set(state => {
                        const newComments = state.comments.map(comment => {
                            if (comment.id === id) {
                                return {...comment, upvoteCount: {clicked: true, count: comment.upvoteCount.count + 1}}
                            }
                            return comment
                        }) 
                        return {comments: newComments}
                    })
                }
			}),
			{
				name: 'cropComment-Storage',
			},
		),
	),
);
