const path = require("path");
const slugify = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipes {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  result.data.allContentfulRecipes.nodes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      const tagSlugify = slugify(tag, { lower: true });
      createPage({
        path: `/tag/${tagSlugify}`,
        component: path.resolve(`src/template/tag-template.js`),
        context: {
          tag: tag,
        },
      });
    });
  });
};
