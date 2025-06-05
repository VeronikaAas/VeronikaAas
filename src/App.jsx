import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import DesignOne from './layouts/DesignOne';
import DesignTwo from './layouts/DesignTwo';
import OneHome from './pages/OneHome';
import TwoHome from './pages/TwoHome';

import Auction from './pages/projects/Auction';
import ReactProject from './pages/projects/React';
import Fireside from './pages/projects/Fireside';
import DarkAuction from './pages/projects/DarkAuction';
import DarkReact from './pages/projects/DarkReact';
import DarkFireside from './pages/projects/DarkFireside';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<LandingPage />} />

				{/* Router for Design One */}
				<Route path="/one/*" element={<DesignOne />}>
					<Route index element={<OneHome />} />
					<Route path="projects/Auction" element={<Auction />} />
					<Route path="projects/React" element={<ReactProject />} />
					<Route path="projects/Fireside" element={<Fireside />} />
				</Route>

				{/* Router for Design Two */}
				<Route path="/two/*" element={<DesignTwo />}>
					<Route index element={<TwoHome />} />
					<Route path="projects/DarkAuction" element={<DarkAuction />} />
					<Route path="projects/DarkReact" element={<DarkReact />} />
					<Route path="projects/DarkFireside" element={<DarkFireside />} />
				</Route>

				{/* Fallback */}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
}

export default App;
