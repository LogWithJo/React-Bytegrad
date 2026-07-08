import { Button } from '@/components/ui/button';
import { usetreckBagData } from '@/stores/treckBag.store';
import { ButtonsActions } from '@/types/types';

function ActionButtons() {
	const { completeAll, inCompleteAll, removeAll } = usetreckBagData();
	function handleClick(value: {
		readonly content: string;
		readonly func: (data: {
			removeAll: () => void;
			completeAll: () => void;
			inCompleteAll: () => void;
		}) => void;
	}) {
		value.func({ completeAll, inCompleteAll, removeAll });
	}
	return (
		<div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
			{Object.values(ButtonsActions).map((value) => {
				return (
					<Button
						key={value.content}
						className="flex capitalize items-center justify-center h-10 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm font-medium cursor-pointer transition-colors"
						onClick={() => {
							handleClick(value);
						}}
					>
						{value.content}
					</Button>
				);
			})}
		</div>
	);
}

export default ActionButtons;
