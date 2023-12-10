import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../Layout/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import slugify from "slugify";

const TemplateRecipes = (prop) => {
  const data = prop.data.contentfulRecipes;
  const { title, content, cookTime, description, image, prepTime, serving } =
    data;
  const Image = getImage(image);

  return (
    <Layout>
      <div className="single-recipes-container">
        <div className="center-con">
          <div className="top-single-recipe">
            <div className="image-con-rec">
              <GatsbyImage
                image={Image}
                alt={title}
                className="image-recipes"
              />
            </div>
            <div className="top-left-con">
              <h2>{title}</h2>
              <p>{description.description}</p>
              <div className="info-container-cooktime">
                <div className="perptime-con">
                  <BsClock />
                  <p>Prep Time</p>
                  <p>{prepTime}min</p>
                </div>
                <div className="perptime-con">
                  <BsClockHistory />
                  <p>Cock Time</p>
                  <p>{cookTime}min</p>
                </div>
                <div className="perptime-con">
                  <BsPeople />
                  <p>Servings</p>
                  <p>{serving}</p>
                </div>
              </div>
              <div className="tags-con">
                <h4>Tags : </h4>
                {content.tags.map((item, index) => {
                  const slugifyItem = slugify(item, { lower: true });
                  return (
                    <Link key={index} to={`/tag/${slugifyItem}`}>
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="button-recipes-con">
            <div className="button-left-con">
              <h2>Instructions</h2>
              {content.instructions.map((item, index) => {
                return (
                  <div key={index} className="instruction-con">
                    <h3>STEP {index + 1}</h3>
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
            <div className="button-right-con">
              <div className="ingredients-con">
                <h2>Ingredients</h2>
                {content.ingredients.map((item, index) => {
                  return <p key={index}>- {item}</p>;
                })}
              </div>
              <div className="tools-con">
                <h2>Tools</h2>
                {content.tools.map((item, index) => {
                  return <p key={index}>- {item}</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const data = graphql`
  query singleQueryRecipes($title: String) {
    contentfulRecipes(title: { eq: $title }) {
      title
      cookTime
      content {
        tags
        ingredients
        instructions
        tools
      }
      prepTime
      serving
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      description {
        description
      }
    }
  }
`;

export default TemplateRecipes;
