import React from "react";
import { graphql } from "gatsby";
import RecipesList from "../component/RecipesList";
import Layout from "../Layout/Layout.js";
import SEO from "../component/SEO.js";

const Tagtemplate = (props) => {
  const recipes = props.data.allContentfulRecipes.nodes;
  return (
    <div>
      <Layout>
        <SEO titl={props.pageContext.tag} />
        <div className="center-con">
          <div className="single-container">
            <h2>{props.pageContext.tag}</h2>
            <RecipesList recipes={recipes} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query GetRecipesByTags($tag: String) {
    allContentfulRecipes(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        title
        id
      }
    }
  }
`;

export default Tagtemplate;
