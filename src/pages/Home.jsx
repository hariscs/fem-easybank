import ArticlesSection from '../components/ArticlesSection';
import BankingSection from '../components/BankingSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';

const Home = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<BankingSection />
			<ArticlesSection />
			<Footer />
		</div>
	);
};

export default Home;
