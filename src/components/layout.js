import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
	<div
		style={{
			marginLeft: 'auto',
			marginRight: 'auto',
			padding: '1.5rem 1.125rem',
			paddingTop: '1.5rem',
			maxWidth: '40rem',
		}}
	>
		<div>
			{children}
			<footer />
		</div>
	</div>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
