import TaskContainer from './TaskContainer';
import TaskInputForm from './TsakInputForm';

export default function Zustand() {
	return (
		<div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased">
			<div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
				<div className="p-6 bg-linear-to-r from-indigo-600 to-violet-600 sm:p-8">
					<h1 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">
						Task Dashboard
					</h1>
					<p className="mt-1 text-indigo-100 text-sm">
						Keep track of your daily goals and objectives.
					</p>
				</div>

				<div className="p-6 sm:p-8 space-y-6">
					<TaskInputForm />
					<TaskContainer />
				</div>
			</div>
		</div>
	);
}
