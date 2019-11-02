import React from 'react';
import Layout from '../components/layout';

export default ({ pageContext }) => {
	console.log(pageContext);
	return (
		<Layout>
			<h1>{pageContext.title}</h1>
			<h4>
				{`Adapted from `}
				<a href={pageContext.source}>here</a>
			</h4>
			<h2>Ingredients</h2>
			<ul>
				{pageContext.ingredients &&
					pageContext.ingredients.map(ingredient => (
						<li>{`${ingredient.quantity} - ${ingredient.item}`}</li>
					))}
			</ul>
			<h2>Instructions</h2>
			<ol>
				{pageContext.instructions &&
					pageContext.instructions.map(instruction => <li>{instruction}</li>)}
			</ol>
		</Layout>
	);
};
