const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='logo'>logo</div>
			<ul className='list-items'>
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
			<a href='/' className='btn btn-cta'>
				SignUp
			</a>
		</nav>
	);
};

export default Navbar;
