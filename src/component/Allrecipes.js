import React from "react";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    allContentfulRecipes(sort: { title: ASC }) {
      nodes {
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        prepTime
        cookTime
        title
        content {
          tags
        }
      }
    }
  }
`;

const Allrecipes = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipes.nodes;

  return (
    <div className="allrecipes-con">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default Allrecipes;
