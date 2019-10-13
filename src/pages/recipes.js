import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

export const byFile = fileName => edge => edge.node.file === fileName;

const RecipePage = () => (
	<StaticQuery
		query={graphql`
			{
				allRecipesJson {
					edges {
						node {
							title
						}
					}
				}
			}
		`}
		render={data => (
			<Layout>
				<h1>Recipes</h1>
				<ul>
					{data.allRecipesJson.edges.map(edge => (
						<li>{edge.node.title}</li>
					))}
				</ul>
			</Layout>
		)}
	/>
);

export default RecipePage;
