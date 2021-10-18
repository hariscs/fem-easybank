import classes from './CardItem.module.css';

function CardItem(props) {
	return (
		<>
			<li className={classes.card__item}>
				<img src={props.src} alt='icon' />
				<h3 className='card__itemTitle'>{props.title}</h3>
				<p className='card__itemSubtitle'>{props.subTitle}</p>
			</li>
		</>
	);
}

export default CardItem;
