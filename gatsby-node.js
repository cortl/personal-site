const convertToSlug = title => title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    {
        allRecipesJson {
          nodes {
            instructions
            source
            title
            ingredients {
              quantity
              item
            }
          }
        }
      }      
    `)
    data.allRecipesJson.nodes.forEach(node => {
        actions.createPage({
            path: `recipes/${convertToSlug(node.title)}`,
            component: require.resolve(`./src/templates/recipe.js`),
            context: { ...node },
        })
    })
}