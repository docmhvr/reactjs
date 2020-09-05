import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/iqtest">IQ Test</Link>
				</li>
				<li>
					<Link to="/about">About Us</Link>
				</li>
			</ul>
		</nav>
	);

export default NavBar;