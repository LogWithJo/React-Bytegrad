import { Hash, Heart, MessageSquare } from 'lucide-react';
import React from 'react';

// ==========================================
// 1. HEADER COMPONENT
// ==========================================
const Header = () => {
	return (
		<header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
			<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<div className="bg-indigo-600 p-2 rounded-lg text-white font-bold tracking-wider flex items-center justify-center">
						<MessageSquare size={20} />
					</div>
					<span className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
						CorpComment
					</span>
				</div>
				<p className="text-sm text-slate-400 font-medium hidden sm:block">
					Give Feedback. Publicly.
				</p>
			</div>
		</header>
	);
};

// ==========================================
// 2. FORM SUB-COMPONENTS
// ==========================================
const FeedbackInput = () => (
	<textarea
		rows={3}
		className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none text-sm"
		placeholder="Please put #company name followed by your feedback..."
	/>
);

const CharacterCounter = () => (
	<span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">
		124 / 150
	</span>
);

const SubmitButton = () => (
	<button
		type="submit"
		className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm px-5 py-2 rounded-xl transition shadow-lg shadow-indigo-600/20 active:scale-95"
	>
		Submit
	</button>
);

const FeedbackForm = () => {
	return (
		<div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
			<h2 className="text-slate-200 font-semibold mb-3 text-base">
				Leave your feedback
			</h2>
			<form onSubmit={(e) => e.preventDefault()} className="space-y-3">
				<FeedbackInput />
				<div className="flex items-center justify-between">
					<CharacterCounter />
					<SubmitButton />
				</div>
			</form>
		</div>
	);
};

// ==========================================
// 3. COMMENT CARD & LIST COMPONENTS (HARDCODED)
// ==========================================
const CommentCardOne = () => (
	<div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition flex items-start gap-4 shadow-sm">
		<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
			A
		</div>
		<div className="flex-1 min-w-0">
			<div className="flex items-start justify-between gap-2 mb-1.5">
				<span className="text-xs font-bold text-indigo-400 tracking-wide uppercase">
					#amazon
				</span>
				<span className="text-xs text-slate-500 whitespace-nowrap">2d ago</span>
			</div>
			<p className="text-slate-300 text-sm leading-relaxed break-words">
				The delivery speed is incredible, but the packaging layout on the
				checkout screen could be cleaner.
			</p>
		</div>
		<button
			type="button"
			className="flex flex-col items-center gap-1 group bg-slate-800 hover:bg-slate-700/70 border border-slate-700/50 px-2.5 py-2 rounded-xl transition min-w-[44px]"
		>
			<Heart
				size={16}
				className="text-slate-400 group-hover:text-rose-500 transition group-hover:scale-110"
			/>
			<span className="text-xs font-semibold font-mono text-slate-300">42</span>
		</button>
	</div>
);

const CommentCardTwo = () => (
	<div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition flex items-start gap-4 shadow-sm">
		<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
			N
		</div>
		<div className="flex-1 min-w-0">
			<div className="flex items-start justify-between gap-2 mb-1.5">
				<span className="text-xs font-bold text-indigo-400 tracking-wide uppercase">
					#netflix
				</span>
				<span className="text-xs text-slate-500 whitespace-nowrap">4d ago</span>
			</div>
			<p className="text-slate-300 text-sm leading-relaxed break-words">
				Loving the new UI update on the TV application! The animations are
				buttery smooth.
			</p>
		</div>
		<button
			type="button"
			className="flex flex-col items-center gap-1 group bg-slate-800 hover:bg-slate-700/70 border border-slate-700/50 px-2.5 py-2 rounded-xl transition min-w-[44px]"
		>
			<Heart
				size={16}
				className="text-slate-400 group-hover:text-rose-500 transition group-hover:scale-110"
			/>
			<span className="text-xs font-semibold font-mono text-slate-300">
				128
			</span>
		</button>
	</div>
);

const CommentCardThree = () => (
	<div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition flex items-start gap-4 shadow-sm">
		<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
			S
		</div>
		<div className="flex-1 min-w-0">
			<div className="flex items-start justify-between gap-2 mb-1.5">
				<span className="text-xs font-bold text-indigo-400 tracking-wide uppercase">
					#spotify
				</span>
				<span className="text-xs text-slate-500 whitespace-nowrap">5d ago</span>
			</div>
			<p className="text-slate-300 text-sm leading-relaxed break-words">
				Please bring back the explicit lyric filter toggle directly on the
				player screen view.
			</p>
		</div>
		<button
			type="button"
			className="flex flex-col items-center gap-1 group bg-slate-800 hover:bg-slate-700/70 border border-slate-700/50 px-2.5 py-2 rounded-xl transition min-w-[44px]"
		>
			<Heart
				size={16}
				className="text-slate-400 group-hover:text-rose-500 transition group-hover:scale-110"
			/>
			<span className="text-xs font-semibold font-mono text-slate-300">19</span>
		</button>
	</div>
);

const CommentList = () => {
	return (
		<div className="space-y-3">
			<div className="flex items-center justify-between px-1">
				<h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider">
					Recent Feedbacks
				</h3>
				<span className="text-xs text-slate-500 font-mono">3 items</span>
			</div>
			<div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
				<CommentCardOne />
				<CommentCardTwo />
				<CommentCardThree />
			</div>
		</div>
	);
};

// ==========================================
// 4. HASHTAGS FINDER SIDEBAR SECTION
// ==========================================
const HashtagSection = () => {
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
				<button
					type="button"
					className="bg-slate-800 hover:bg-indigo-600/20 hover:text-indigo-400 border border-slate-700/60 hover:border-indigo-500/40 text-slate-300 px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer"
				>
					#amazon
				</button>
				<button
					type="button"
					className="bg-slate-800 hover:bg-indigo-600/20 hover:text-indigo-400 border border-slate-700/60 hover:border-indigo-500/40 text-slate-300 px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer"
				>
					#netflix
				</button>
				<button
					type="button"
					className="bg-slate-800 hover:bg-indigo-600/20 hover:text-indigo-400 border border-slate-700/60 hover:border-indigo-500/40 text-slate-300 px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer"
				>
					#spotify
				</button>
				<button
					type="button"
					className="bg-slate-800 hover:bg-indigo-600/20 hover:text-indigo-400 border border-slate-700/60 hover:border-indigo-500/40 text-slate-300 px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer"
				>
					#google
				</button>
				<button
					type="button"
					className="bg-slate-800 hover:bg-indigo-600/20 hover:text-indigo-400 border border-slate-700/60 hover:border-indigo-500/40 text-slate-300 px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer"
				>
					#meta
				</button>
			</div>
		</div>
	);
};

export default function CorpCommentApp() {
	return (
		<div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200">
			<Header />

			<main className="max-w-6xl mx-auto px-4 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-1">
						<HashtagSection />
					</div>
					<div className="lg:col-span-2 space-y-8">
						<FeedbackForm />
						<CommentList />
					</div>

				</div>
			</main>
		</div>
	);
}
