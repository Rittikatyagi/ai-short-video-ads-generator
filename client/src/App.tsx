import Hero from './sections/Hero';
import LenisScroll from './components/lenis';
import Navbar from './components/Navbar';
import SoftBackdrop from './components/SoftBackdrop';
import Features from './sections/Features';
import Pricing from './sections/Pricing';


function App() {
	return (
		<>
			<SoftBackdrop />
			<LenisScroll />
			<Navbar />
			<Hero />
			<Features />
			<Pricing />
		</>
	);
}
export default App;