import ArticlesSection from '../ArticlesSection';
import BankingSection from '../BankingSection';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';

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
