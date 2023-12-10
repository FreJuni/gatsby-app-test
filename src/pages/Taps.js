import React from "react";
import Layout from "../Layout/Layout";
import { graphql, Link } from "gatsby";
import SetupTags from "./setupTags";
import slugify from "slugify";
import SEO from "../component/SEO";

const Taps = ({ data }) => {
  const recipes = data.allContentfulRecipes.nodes;
  const newTaps = SetupTags(recipes);

  return (
    <Layout>
      <SEO titl="Taps" />
      <section className="center-con">
        <div className="tap-container">
          {newTaps.map((item, index) => {
            const [text, value] = item;
            const tapSlugify = slugify(text, { lower: true });
            return (
              <div key={index} className="tap-link-con">
                <Link to={`/tag/${tapSlugify}`}>
                  <h2>{text}</h2>
                  <div className="tap-info">
                    <p>{value} recipe</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export const data = graphql`
  query {
    allContentfulRecipes {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Taps;
