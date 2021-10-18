import classes from './ArticleItem.module.css';

const ArticleItem = (props) => {
	return (
		<>
			<li className={classes.article__item}>
				<img src={props.src} alt='article' className={classes.article__img} />
				<div className={classes.article__text}>
					<span className={classes.article__author}>{props.author}</span>
					<h3 className={classes.article__title}>{props.title}</h3>
					<p className={classes.article__subtitle}>{props.subtitle}</p>
				</div>
			</li>
		</>
	);
};

export default ArticleItem;
