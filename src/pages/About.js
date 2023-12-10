import React from "react";
import Layout from "../Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import RecipesList from "../component/RecipesList";
import SEO from "../component/SEO";

const query = graphql`
  query {
    allContentfulRecipes(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        prepTime
        cookTime
        title
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipes.nodes;
  return (
    <Layout>
      <SEO titl="About" />
      <div className="paddding-con">
        <section className="center-con">
          <div className="about-con">
            <div className="about-left">
              <h2>
                I'm the founder of this website since 2025.It's been 3 years.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Phasellus hendrerit turpis ac libero consectetur.
              </p>
              <p>
                {" "}
                Quisque dapibus libero ac justo suscipit, id commodo velit
                vestibulum. Suspendisse potenti. Donec eget nisi ut justo
                bibendum feugiat.
              </p>
              <button className="contact-btn">
                <Link to="/Contact">Contact</Link>
              </button>
            </div>
            <div className="about-right">
              <StaticImage
                src="../assect/image-single/salt.jpg"
                className="salts-img"
                alt="salts"
              />
            </div>
          </div>
          <div className="about-info">
            <h2>Look at this awsome recipes!</h2>
            <RecipesList recipes={recipes} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
