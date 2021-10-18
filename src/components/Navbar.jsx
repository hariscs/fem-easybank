import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';
import Button from './Button';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<div className='logo'>
					<img src={logo} alt='logo' />
				</div>

				{/* mobile menu icon */}
				<div className='menu-icon' onClick={handleClick}>
					{click ? (
						<img src={close} alt='close icon' />
					) : (
						<img src={hamburger} alt='hamburger icon' />
					)}
				</div>

				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className='menu-item'>
						<a href='/' className='nav-link'>
							Home
						</a>
					</li>
					<li className='menu-item'>
						<a href='/' className='nav-link'>
							About
						</a>
					</li>
					<li className='menu-item'>
						<a href='/' className='nav-link'>
							Contact
						</a>
					</li>
					<li className='menu-item'>
						<a href='/' className='nav-link'>
							Blog
						</a>
					</li>
					<li className='menu-item'>
						<a href='/' className='nav-link'>
							Careers
						</a>
					</li>
				</ul>
				{button && (
					<Button href='/' className='btn cta'>
						Request Invite
					</Button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
