import { MessageSquare } from 'lucide-react';

function Header() {
	return (
		<header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
			<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<div className="bg-indigo-600 p-2 rounded-lg text-white font-bold tracking-wider flex items-center justify-center">
						<MessageSquare size={20} />
					</div>
					<span className="font-bold text-xl tracking-tight bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
						CorpComment
					</span>
				</div>
				<p className="text-sm text-slate-400 font-medium hidden sm:block">
					Give Feedback. Publicly.
				</p>
			</div>
		</header>
	);
}

export default Header;
