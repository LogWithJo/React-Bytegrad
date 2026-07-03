import { Field, FieldGroup } from '@/components/ui/field';
import TreckBagData from '@/context/treckBagContext';
import { SortType } from '@/types/types';
import Task from './Task';

function Taskscontainer({ sort }: { sort: SortType }) {
	const { treckBagData } = TreckBagData();
	const filtered = [...treckBagData].sort((a, b) => {
		if (sort === SortType.packed) {
			return Number(b.isPacked) - Number(a.isPacked);
		}
		return Number(a.isPacked) - Number(b.isPacked);
	});
	const isEmpty = treckBagData.length === 0;
	return (
		<FieldGroup className="gap-3 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
			{isEmpty ? (
				<Field
					orientation="horizontal"
					className="flex items-center rounded-lg transition-colors duration-150 flex-col justify-center py-12 px-4 text-center border-2 border-dashed border-slate-200 bg-slate-50/50 space-x-0 min-h-62.5 before:content-['🧳_Your_bag_is_empty!_Start_adding_items_to_your_trekking_list.'] before:text-slate-400 before:font-medium before:text-sm before:max-w-xs"
				/>
			) : (
				filtered.map((item) => {
					return <Task key={item.name} task={item} />;
				})
			)}
		</FieldGroup>
	);
}

export default Taskscontainer;
