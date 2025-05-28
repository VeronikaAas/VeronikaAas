import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DesignOne from './layouts/DesignOne';
import DesignTwo from './layouts/DesignTwo';
import OneHome from './pages/OneHome';
import TwoHome from './pages/TwoHome';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />

				{/* Ruter for Design One */}
				<Route path="/one/*" element={<DesignOne />}>
					<Route index element={<OneHome />} />
					{/* Legg til flere sider for Design One her */}
				</Route>

				{/* Ruter for Design Two */}
				<Route path="/two/*" element={<DesignTwo />}>
					<Route index element={<TwoHome />} />
					{/* Legg til flere sider for Design Two her */}
				</Route>

				{/* Fallback */}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
}

export default App;
