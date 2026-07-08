import { Heart } from 'lucide-react';
import React from 'react';
import { useCommentsData } from '@/stores/comments.store';
import '@/index.css';
import type { CommentType } from '@/types/types';

function CommentCard({ info }: { info: CommentType }) {
	const { toggleLikesCount } = useCommentsData();
	const [isLicked, setIsClicked] = React.useState(info.upvoteCount.clicked);
	const [animate, setAnimate] = React.useState(false);

	function handleClick() {
		if (isLicked) return;
		toggleLikesCount(Number(info.id));
		setIsClicked(true);
		setAnimate(true);
		setTimeout(() => {
			setAnimate(false);
		}, 600);
	}

	return (
		<div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition flex items-start gap-4 shadow-sm">
			<div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
				{info.badgeLetter}
			</div>
			<div className="flex-1 min-w-0">
				<div className="flex items-start justify-between gap-2 mb-1.5">
					<span className="text-xs font-bold text-indigo-400 tracking-wide uppercase">
						#{info.company}
					</span>
					<span className="text-xs text-slate-500 whitespace-nowrap">
						{info.daysAgo}d ago
					</span>
				</div>
				<p className="text-slate-300 text-sm leading-relaxed break-words">
					{info.text}
				</p>
			</div>

			<button
				type="button"
				onClick={handleClick}
				className="flex flex-col cursor-pointer items-center gap-1 group bg-slate-800 hover:bg-slate-700/70 border border-slate-700/50 px-2.5 py-2 rounded-xl transition min-w-11 relative"
			>
				<Heart
					size={16}
					className={`transition-colors duration-300 group-hover:scale-110 ${isLicked ? 'text-red-600' : ''}`}
				/>
				<div
					className={`text-xs font-semibold font-mono transition-colors duration-300
                        ${isLicked ? 'text-rose-200' : 'text-slate-300'}`}
				>
					{info.upvoteCount.count}
				</div>
				{animate && (
					<div className="absolute inset-0 bg-rose-400 rounded-full opacity-70 animate-ping pointer-events-none" />
				)}
			</button>
		</div>
	);
}

export default CommentCard;
