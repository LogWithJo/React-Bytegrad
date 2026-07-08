import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usetreckBagData } from '@/stores/treckBag.store';

function AddItemField() {
	const { treckBagData, createNewTask } = usetreckBagData();
	const [inputValue, setInputValue] = React.useState('');
	const handleClick = () => {
		if (inputValue.trim().length === 0) return;
		if (treckBagData.some((item) => item.name === inputValue)) {
			setInputValue('');
			return;
		}
		createNewTask(inputValue);
		setInputValue('');
	};
	return (
		<div className="space-y-3">
			<div className="text-sm font-semibold text-slate-700 capitalize">
				add an item
			</div>
			<form action="" className="space-y-3">
				<Input
					autoFocus
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
					className="w-full border-slate-200 focus-visible:ring-indigo-500"
					placeholder="e.g., Passport"
				/>
				<Button
					onClick={handleClick}
					className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
				>
					Add to list
				</Button>
			</form>
		</div>
	);
}
export default AddItemField;
