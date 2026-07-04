import { useTodoStore } from '@/stores/todo.store';
import TaskItem from './TaskItem';

function TaskContainer() {
	const tasks = useTodoStore((state) => state.todos);
	return (
		<div className="space-y-3">
			<div className="flex items-center justify-between border-b border-slate-100 pb-3">
				<h2 className="text-sm font-semibold text-slate-500 tracking-wider uppercase">
					Tasks
				</h2>
				<span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
					{tasks.length} Remaining
				</span>
			</div>

			<div className="space-y-2.5 max-h-112.5 overflow-y-auto pr-1">
				{tasks.map((todo) => (
					<TaskItem
						key={todo.id}
						id={todo.id}
						title={todo.text}
						isCompleted={todo.completed}
					/>
				))}
			</div>
		</div>
	);
}

export default TaskContainer;
