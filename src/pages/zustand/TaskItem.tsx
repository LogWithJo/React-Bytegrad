import { CheckCircle, Edit3, Trash2 } from 'lucide-react';
import React from 'react';
import { useTodoStore } from '@/stores/todo.store';

function TaskItem({
	id,
	title,
	isCompleted,
}: {
	title: string;
	isCompleted: boolean;
	id: number;
}) {
	const { toggleCompleted, removeTodo, updateTodo } = useTodoStore();
	const [edit, setEdit] = React.useState({ edit: false, newText: title });
	return (
		<div className="group flex items-center justify-between p-4 bg-white hover:bg-slate-50 border border-slate-100 rounded-xl transition-all duration-150 gap-4">
			<div className="flex items-center gap-3 min-w-0">
				<button
					onClick={() => {
						toggleCompleted(id);
					}}
					type="button"
					className={`shrink-0 w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
						isCompleted
							? 'bg-emerald-500 border-emerald-500 text-white'
							: 'border-slate-300 text-transparent hover:border-indigo-500'
					}`}
				>
					<CheckCircle className="w-4 h-4" />
				</button>
				{edit.edit ? (
					<input
						className="text-black"
						type="text"
						value={edit.newText}
						onChange={(e) => {
							setEdit((prev) => ({ ...prev, newText: e.target.value }));
						}}
					/>
				) : (
					<span
						className={`text-sm sm:text-base font-medium truncate ${
							isCompleted ? 'text-slate-400 line-through' : 'text-slate-700'
						}`}
					>
						{edit.newText}
					</span>
				)}
			</div>

			<div className="flex items-center gap-1 sm:gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-150">
				{edit.edit ? (
					<button
						type="button"
						onClick={() => {
							setEdit((prev) => ({ ...prev, edit: false }));
							updateTodo(edit.newText, id);
						}}
						className="text-black"
					>
						save
					</button>
				) : (
					<button
						onClick={() => {
							setEdit((prev) => ({ ...prev, edit: !prev.edit }));
						}}
						type="button"
						aria-label="Edit task"
						className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors focus:outline-none"
					>
						<Edit3 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
					</button>
				)}
				<button
					onClick={() => {
						removeTodo(id);
					}}
					type="button"
					aria-label="Remove task"
					className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors focus:outline-none"
				>
					<Trash2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
				</button>
			</div>
		</div>
	);
}

export default TaskItem;
