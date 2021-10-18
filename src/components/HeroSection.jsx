import classes from './HeroSection.module.css';
import heroImg from '../images/image-mockups.png';
import Button from './Button';

const HeroSection = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.hero__container}>
				<div className={classes.hero__intro}>
					<h1 className={classes.hero__title}>
						Next generation digital banking
					</h1>
					<p className={classes.hero__subtitle}>
						Take your financial life online. Your Easybank account will be a
						one-stop-shop for spending, saving, budgeting, investing, and much
						more.
					</p>
					<Button>Request Invite</Button>
				</div>
				<img src={heroImg} alt='hero' className={classes.hero__img} />
			</div>
		</section>
	);
};

export default HeroSection;
