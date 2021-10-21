import ArticlesSection from '../components/ArticlesSection';
import BankingSection from '../components/BankingSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

const Home = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<BankingSection />
			<ArticlesSection />
			<Footer />
		</>
	);
};

export default Home;
