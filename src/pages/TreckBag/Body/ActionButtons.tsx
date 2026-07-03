import { Button } from '@/components/ui/button';
import TreckBagData from '@/context/treckBagContext';
import { ButtonsActions, type treckBagTasks } from '@/types/types';

function ActionButtons() {
	const { setTreckBagData } = TreckBagData();
	function handleClick(value: {
		content: string;
		func: (
			setTreckBagData: React.Dispatch<React.SetStateAction<treckBagTasks[]>>,
		) => void;
	}) {
		value.func(setTreckBagData);
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
