import { Heart } from 'lucide-react';

function CommentCard() {
	return (
		<div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition flex items-start gap-4 shadow-sm">
			<div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
				A
			</div>
			<div className="flex-1 min-w-0">
				<div className="flex items-start justify-between gap-2 mb-1.5">
					<span className="text-xs font-bold text-indigo-400 tracking-wide uppercase">
						#amazon
					</span>
					<span className="text-xs text-slate-500 whitespace-nowrap">
						2d ago
					</span>
				</div>
				<p className="text-slate-300 text-sm leading-relaxed wrap-break-word">
					The delivery speed is incredible, but the packaging layout on the
					checkout screen could be cleaner.
				</p>
			</div>
			<button
				type="button"
				className="flex flex-col items-center gap-1 group bg-slate-800 hover:bg-slate-700/70 border border-slate-700/50 px-2.5 py-2 rounded-xl transition min-w-11"
			>
				<Heart
					size={16}
					className="text-slate-400 group-hover:text-rose-500 transition group-hover:scale-110"
				/>
				<span className="text-xs font-semibold font-mono text-slate-300">
					42
				</span>
			</button>
		</div>
	);
}

export default CommentCard;
