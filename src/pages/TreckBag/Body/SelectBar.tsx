import type React from 'react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import type { SortType } from '@/types/types';

function SelectBar({
	sort,
	setSort,
}: {
	sort: SortType;
	setSort: React.Dispatch<React.SetStateAction<SortType>>;
}) {
	return (
		<div className="w-full">
			<Select
				value={sort}
				onValueChange={(e: SortType) => {
					setSort(e);
				}}
			>
				<SelectTrigger className="w-full bg-white border-slate-200 shadow-sm *:caption-bottom focus:ring-indigo-500">
					<SelectValue
						placeholder="Sort"
						className="capitalize placeholder:capitalize"
					/>
				</SelectTrigger>
				<SelectContent>
					<SelectGroup className="*:capitalize">
						<SelectItem value="packed" defaultChecked>
							Sort by packed
						</SelectItem>
						<SelectItem value="unpacked">Sort by unpacked</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}
export default SelectBar;
