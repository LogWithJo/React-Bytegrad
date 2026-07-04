import CommentList from "./CommentList";
import FeedBackForm from "./FeedBackForm";
import HashtagSection from "./HashtagSection";
import Header from "./Header";

export default function CorpCommentApp() {
	return (
		<div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200">
			<Header />

			<main className="max-w-6xl mx-auto px-4 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 space-y-8">
						<FeedBackForm />
						<CommentList />
					</div>
					<div className="lg:col-span-1">
						<HashtagSection />
					</div>
				</div>
			</main>
		</div>
	);
}