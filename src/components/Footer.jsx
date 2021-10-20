import classes from './Footer.module.css';
import Button from './Button';

import logo from '../images/footer-logo.svg';

import fb from '../images/icon-facebook.svg';
import yt from '../images/icon-youtube.svg';
import twitter from '../images/icon-twitter.svg';
import pin from '../images/icon-pinterest.svg';
import insta from '../images/icon-instagram.svg';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.footer__container}>
				<div className={classes.footer__icons}>
					<img src={logo} alt='logo' className={classes.footer__logo} />
					<div className={classes.footer__socials}>
						<img src={fb} alt='facebook' className={classes.icon} />

						<img src={yt} alt='youtube' className={classes.icon} />
						<img src={twitter} alt='twitter' className={classes.icon} />
						<img src={pin} alt='pinterset' className={classes.icon} />
						<img src={insta} alt='instagram' className={classes.icon} />
					</div>
				</div>

				<div className={classes.footer__links}>
					<a href='/' className={classes.link}>
						About Us
					</a>
					<a href='/' className={classes.link}>
						Contact
					</a>
					<a href='/' className={classes.link}>
						Blog
					</a>
					<a href='/' className={classes.link}>
						Careers
					</a>
					<a href='/' className={classes.link}>
						Support
					</a>
					<a href='/' className={classes.link}>
						Privacy Policy
					</a>
				</div>

				<div className={classes.footer__btn}>
					<Button>Request Invite</Button>
					<p className={classes.copyright}>
						&copy; Easybank. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
