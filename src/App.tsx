import Navbar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import { CssBaseline } from '@mui/material';

function App() {
	return (
		<>
			<CssBaseline />
			<Navbar />
			<About />
			<Projects />
		</>
	);
}

export default App;
