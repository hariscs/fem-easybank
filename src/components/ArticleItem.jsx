const ArticleItem = (props) => {
	return (
		<>
			<li className='article__item'>
				<img src={props.src} alt='article' className='article__img' />
				<div className='article__text'>
					<span className='article__author'>{props.author}</span>
					<h3 className='article__title'>{props.title}</h3>
					<p className='article__subtitle'>{props.subtitle}</p>
				</div>
			</li>
		</>
	);
};

export default ArticleItem;
