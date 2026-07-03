import ActionButtons from './ActionButtons';
import AddItemField from './AddItemField';

function SideBar() {
	return (
		<div className="space-y-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-fit md:sticky md:top-24">
			<AddItemField />
			<ActionButtons />
		</div>
	);
}

export default SideBar;
