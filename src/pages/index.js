import React from "react";
import Layout from "../Layout/Layout";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import SEO from "../component/SEO";
import { graphql } from "gatsby";
import Allrecipes from "../component/Allrecipes";

const Home = ({ data }) => {
  const Image = data.file.childImageSharp.gatsbyImageData;

  return (
    <Layout>
      <SEO titl="Home" descriptio="This is home pages." />
      <div className="paddding-con">
        <section className="center-con">
          <div className="hero-image-con">
            <GatsbyImage
              image={Image}
              className="hero-image"
              alt="salts shaking"
            />
            <div className="hero-info">
              <div>
                <h1>Simply Recipes</h1>
                <p>No Fluff, Just Recipes</p>
              </div>
            </div>
          </div>
          <Allrecipes />
        </section>
      </div>
    </Layout>
  );
};

export const data = graphql`
  query {
    file(name: { eq: "hero" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

export default Home;
