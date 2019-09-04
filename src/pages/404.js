import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Emoji } from '../components/emoji';

const NotFoundPage = () => (
	<Layout>
		<SEO title='404: Not found' />
		<h1>404 Not Found</h1>
		<p>
			This page doesn't exist
			<Emoji symbol={'😢'} description={'crying face'} />
		</p>
	</Layout>
);

export default NotFoundPage;
