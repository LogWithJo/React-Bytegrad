import React from 'react';
import { useCommentsData } from '@/stores/comments.store';

function FeedBackForm() {
	const { createNewComment } = useCommentsData();
	const [inputValue, setInputValue] = React.useState('');
	const [showError, setShowError] = React.useState(false);
	function handleClick() {
		const result = verify(inputValue);
		if (result) {
			const companyName = result?.[1];
			const text = result?.[2];
			createNewComment(text, companyName);
			setInputValue('');
		} else {
			setShowError(true);
			setInputValue('');
			setTimeout(() => {
				setShowError(false);
			}, 1000);
		}
	}

	function verify(text: string) {
		if (text.length > 150) {
			return null;
		}
		const match = text.match(/^#([A-Za-z0-9_-]+)\r?\n([\s\S]+)$/);
		return match;
	}

	return (
		<div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
			<h2 className="text-slate-200 font-semibold mb-3 text-base">
				Leave your feedback
			</h2>
			<form onSubmit={(e) => e.preventDefault()} className="space-y-3">
				<textarea
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
					rows={3}
					className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none text-sm"
					placeholder="Please put #company name followed by your feedback..."
				/>
				{showError && (
					<div className="p-3 bg-rose-950/40 border border-rose-800 rounded-xl flex items-start gap-2.5">
						<div className="text-rose-400 mt-0.5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-4 h-4"
								aria-hidden="true"
							>
								<title>Warning Label</title>
								<path
									fillRule="evenodd"
									d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 18 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<h4 className="text-xs font-semibold text-rose-200">
								Submission Error
							</h4>
							<p className="text-[11px] text-rose-400/90 mt-0.5">
								Make sure to format your post as #company followed by your
								comment.
							</p>
						</div>
					</div>
				)}
				<div className="flex items-center justify-between">
					<span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">
						{inputValue.length} / 150
					</span>
					<button
						onClick={handleClick}
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
