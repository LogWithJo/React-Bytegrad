import CommentCard from './CommentCard';

function CommentList() {
	return (
		<div className="space-y-3">
			<div className="flex items-center justify-between px-1">
				<h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider">
					Recent Feedbacks
				</h3>
				<span className="text-xs text-slate-500 font-mono">3 items</span>
			</div>
			<div className="space-y-3 max-h-150 overflow-y-auto pr-1">
				<CommentCard />
			</div>
		</div>
	);
}

export default CommentList;
