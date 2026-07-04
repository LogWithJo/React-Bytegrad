import Body from './Body/Body';
import SideBar from './Body/SideBar';
import Header from './Header';

function TreckBag() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans">
			<Header />
			<div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
				<Body />
				<SideBar />
			</div>
		</div>
	);
}

export default TreckBag;
