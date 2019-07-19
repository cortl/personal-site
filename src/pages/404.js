import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Emoji } from '../components/emoji';

const NotFoundPage = () => (
	<Layout>
		<SEO title='404: Not found' />
		<h1>404 NOT FOUND</h1>
		<p>
			You just hit a route that doesn&#39;t exist...{' '}
			<Emoji symbol={'😢'} description={'crying face'} />
		</p>
	</Layout>
);

export default NotFoundPage;
