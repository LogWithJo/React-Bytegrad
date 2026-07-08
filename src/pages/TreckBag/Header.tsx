import { usetreckBagData } from '@/stores/treckBag.store';

function Header() {
	const { treckBagData } = usetreckBagData();
	const achieved = treckBagData.filter((item) => item.isPacked).length;
	return (
		<div className="sticky top-0 z-50 bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm">
			<div className="text-sm font-semibold tracking-wide uppercase text-indigo-600">
				TreckBag
			</div>
			<div className="text-sm font-medium bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full border border-indigo-100">
				{achieved} / {treckBagData.length} items packed
			</div>
		</div>
	);
}

export default Header;
