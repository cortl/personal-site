import React from 'react';
import Layout from '../components/layout';

export default all => {
	console.log(all);
	return (
		<Layout>
			<h1>{all.pageContext.title}</h1>
			<h4>Adapted from</h4>
			<h2>Ingredients</h2>
			<ul>
				{
					// pageContext.ingredients && pageContext.ingredients.edges.map(node => (
					//     <li>{`${node.quantity} - ${node.item}`}</li>
					// ))
				}
			</ul>
			<h2>Instructions</h2>
		</Layout>
	);
};
