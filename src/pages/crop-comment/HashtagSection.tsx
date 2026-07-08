import { Hash } from 'lucide-react';
import { useCommentsData } from '@/stores/comments.store';

function HashtagSection() {
	const { categories, setSelectCategory } = useCommentsData();
	return (
		<div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl h-fit">
			<div className="flex items-center gap-2 mb-4">
				<Hash size={18} className="text-indigo-400" />
				<h2 className="text-slate-200 font-semibold text-base">
					Trending Corporate Tags
				</h2>
			</div>
			<p className="text-xs text-slate-400 mb-4 leading-relaxed">
				Click a tag to reveal related feedback topics and filter the public
				boards.
			</p>

			<div className="flex flex-wrap gap-2">
				{categories.map((item) => (
					<button
						onClick={() => {
							setSelectCategory(item)
						}}
						key={item}
						type="button"
						className="bg-slate-800 hover:bg-indigo-600/20 hover:text-indigo-400 border border-slate-700/60 hover:border-indigo-500/40 text-slate-300 px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer"
					>
						{item}
					</button>
				))}
			</div>
		</div>
	);
}

export default HashtagSection;
