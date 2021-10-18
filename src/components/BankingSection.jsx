import classes from './BankingSection.module.css';
import CardItem from './CardItem';
import online from '../images/icon-online.svg';
import simple from '../images/icon-budgeting.svg';
import fast from '../images/icon-onboarding.svg';
import api from '../images/icon-api.svg';

const BankingSection = () => {
	return (
		<section className={classes.bankingSection}>
			<div className={classes.bankingSection__intro}>
				<h2 className={classes.bankingSection__title}>Why choose EasyBank?</h2>
				<p className={classes.bankingSection__subtitle}>
					We leverage Open Banking to turn your bank account into your financial
					hub. Control your finances like never before.
				</p>
			</div>
			<div className='bankingSection__cardsContainer'>
				<ul>
					<CardItem
						src={online}
						title='Online Banking'
						subTitle='Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
					/>
					<CardItem
						src={simple}
						title='Simple Budgeting'
						subTitle='See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
					/>
					<CardItem
						src={fast}
						title='Fast Onboarding'
						subTitle='We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
					/>
					<CardItem
						src={api}
						title='Open API'
						subTitle='Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
					/>
				</ul>
			</div>
		</section>
	);
};

export default BankingSection;
