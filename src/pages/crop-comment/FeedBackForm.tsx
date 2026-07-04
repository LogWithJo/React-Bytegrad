function FeedBackForm() {
	return (
		<div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
			<h2 className="text-slate-200 font-semibold mb-3 text-base">
				Leave your feedback
			</h2>
			<form onSubmit={(e) => e.preventDefault()} className="space-y-3">
				<textarea
					rows={3}
					className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none text-sm"
					placeholder="Please put #company name followed by your feedback..."
				/>
				<div className="flex items-center justify-between">
					<span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">
						124 / 150
					</span>
					<button
						type="submit"
						className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm px-5 py-2 rounded-xl transition shadow-lg shadow-indigo-600/20 active:scale-95"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default FeedBackForm;
