import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import AppData from './context/AppContext';

export default function App() {
	const {info} = AppData()
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			{info.map((project) => {
				return (
					<Route
						key={project.id}
						path={`/${project.name}`}
						element={project?.element}
					></Route>
				);
			})}
		</Routes>
	);
}
