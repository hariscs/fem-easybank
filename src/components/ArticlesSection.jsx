import ArticleItem from './ArticleItem';
import classes from './ArticleSection.module.css';

import currency from '../images/image-currency.jpg';
import restaurant from '../images/image-restaurant.jpg';
import plane from '../images/image-plane.jpg';
import confetti from '../images/image-confetti.jpg';

const ArticlesSection = () => {
	return (
		<section className={classes.articles}>
			<div className={classes.articles__container}>
				<h2 className={classes.articles__title}>Latest Articles</h2>
				<div className={classes.articles__cards}>
					<ul className={classes.articles__list}>
						<ArticleItem
							src={currency}
							author='By Claire Robinson'
							title='Receive money in any currency with no fees'
							subtitle='The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
						/>
						<ArticleItem
							src={restaurant}
							author='By Wilson Hutton'
							title='Treat yourself without worrying about money'
							subtitle='
  							Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
						/>
						<ArticleItem
							src={plane}
							author='By Wilson Hutton'
							title='Take your Easybank card wherever you go'
							subtitle='
  							We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
						/>
						<ArticleItem
							src={confetti}
							author='By Claire Robinson'
							title=' Our invite-only Beta accounts are now live!'
							subtitle='
  							After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
						/>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ArticlesSection;
