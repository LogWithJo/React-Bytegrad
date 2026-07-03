import { Checkbox } from '@/components/ui/checkbox';
import { Field, FieldLabel } from '@/components/ui/field';
import TreckBagData from '@/context/treckBagContext';
import type { treckBagTasks } from '@/types/types';

function Task({ task }: { task: treckBagTasks }) {
	const { setTreckBagData } = TreckBagData();
	return (
		<Field orientation="horizontal" className="flex items-start gap-3 py-2">
			<Checkbox
				id={String(task.id)}
				name={task.name.trim()}
				checked={task.isPacked}
				onCheckedChange={() => {
					setTreckBagData((prev) =>
						prev.map((item) =>
							item.name === task.name
								? { ...item, isPacked: !item.isPacked }
								: item,
						),
					);
				}}
				className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
			/>
			<FieldLabel
				htmlFor={String(task.id)}
				className="text-sm font-medium text-gray-700 cursor-pointer select-none"
			>
				{task.name}
			</FieldLabel>
		</Field>
	);
}

export default Task;
