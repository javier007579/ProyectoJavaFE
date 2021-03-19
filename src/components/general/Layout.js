import React from 'react'

import Header from './header/Header'
import Footer from './Footer'

const Layout = props => {
	return (
		<div className="container-fluid">
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;