import React from "react";
import Layout from "../Layout/Layout";
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

const Contact = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipes.nodes;
  return (
    <Layout>
      <SEO titl="Contact" />
      <div className="paddding-con">
        <section className="center-con">
          <div className="contact-con">
            <div className="contact-left-con">
              <h2>You can contact me everytime.</h2>
              <p>
                Take note of any dietary restrictions or preferences of your
                guests. This could include vegetarian, vegan, gluten-free, or
                any food allergies.
              </p>
              <p>
                Are you focusing on a particular cuisine, such as Italian,
                Mexican, or Asian? Having a theme can guide your menu choices
                and create a cohesive dining experience.
              </p>
            </div>
            <div className="contact-right-con">
              <form
                className="contact-form"
                action="https://formspree.io/f/xwkdgbll"
                method="POST"
              >
                <div>
                  <input
                    type="text"
                    className="input-con"
                    placeholder="Name"
                    id="name"
                    name="name"
                    required
                  ></input>
                </div>
                <div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="input-con"
                    placeholder="Email"
                    required
                  ></input>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    className="message-con"
                    id="message"
                    name="message"
                  ></textarea>
                </div>
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="contact-info">
            <h2>Choose your favourite recipes!</h2>
            <div className="contact-info-con">
              <RecipesList recipes={recipes} />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
