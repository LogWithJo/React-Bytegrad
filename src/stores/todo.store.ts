import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface Todo {
	id: number;
	text: string;
	completed: boolean;
}

interface TodoStore {
	todos: Todo[];
	addTodo: (task: string) => void;
	removeTodo: (id: number) => void;
	toggleCompleted: (id: number) => void;
	updateTodo: (text: string, id: number) => void;
}

export const useTodoStore = create<TodoStore>()(
	devtools(
		persist<TodoStore>(
			(set) => ({
				todos: [],
				addTodo: (task) => {
					set((state) => {
						const newTodos = [
							...state.todos,
							{ id: Date.now(), text: task, completed: false },
						];
						return { todos: newTodos };
					});
				},
				removeTodo: (id) =>
					set((state) => {
						const newTodos = state.todos.filter((todo) => todo.id !== id);
						return { todos: newTodos };
					}),
				toggleCompleted: (id) => {
					set((state) => {
						const newTodos = state.todos.map((todo) => {
							if (todo.id === id) {
								todo.completed = !todo.completed;
							}
							return todo;
						});
						return { todos: newTodos };
					});
				},
				updateTodo: (text, id) => {
					set((state) => {
						const newTodos = state.todos.map((todo) =>
							todo.id === id ? { ...todo, text } : todo,
						);
						return { todos: newTodos };
					});
				},
			}),
			{
				name: 'todo-storage',
			},
		),
	),
);
