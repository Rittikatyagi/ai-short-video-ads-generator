import Hero from './sections/Hero';
import LenisScroll from './components/lenis';
import Navbar from './components/Navbar';
import SoftBackdrop from './components/SoftBackdrop';
import Features from './sections/Features';


function App() {
	return (
		<>
			<SoftBackdrop />
			<LenisScroll />
			<Navbar />
			<Hero />
			<Features />
		</>
	);
}
export default App;