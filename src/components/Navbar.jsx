import { useState } from 'react';
import './Navbar.css';
import logo from '../images/logo.svg';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<div className='logo'>
					<img src={logo} alt='logo' />
				</div>

				{/* mobile menu icon */}
				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>

				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/'>About</a>
					</li>
					<li>
						<a href='/'>Contact</a>
					</li>
					<li>
						<a href='/'>Blog</a>
					</li>
					<li>
						<a href='/'>Careers</a>
					</li>
				</ul>
				<a href='/' className='btn cta'>
					SignUp
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
