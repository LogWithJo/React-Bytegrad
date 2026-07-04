import { Plus } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTodoStore } from '@/stores/todo.store';

function TaskInputForm() {
	const [task, setTask] = React.useState('');
	const addTodo = useTodoStore((state) => state.addTodo);
	return (
		<div className="flex flex-col sm:flex-row gap-3">
			<form
				className="relative flex-1"
				onSubmit={(e) => {
					e.preventDefault();
					addTodo(task.trim());
					setTask('');
				}}
			>
				<Input
					onChange={(e) => {
						setTask(e.target.value);
					}}
					value={task}
					type="text"
					placeholder="What needs to be done?"
					className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm sm:text-base"
				/>
			</form>
			<Button
				type="button"
				className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors duration-150 shadow-sm shadow-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-sm sm:text-base"
			>
				<Plus className="w-5 h-5" />
				<span>Add Task</span>
			</Button>
		</div>
	);
}

export default TaskInputForm;
