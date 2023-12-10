import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import slugify from "slugify";

const RecipesList = ({ recipes = [] }) => {
  return (
    <section className="recipeslist-con">
      {recipes.map((item) => {
        const { content, cookTime, id, image, prepTime, title } = item;
        const Image = getImage(image);
        const slug = slugify(title, { lower: true });
        return (
          <article className="single-recipes-con" key={id}>
            <Link to={`/${slug}`}>
              <GatsbyImage
                image={Image}
                alt="title"
                class="recipeslist-image"
              />
              <div className="info-con">
                <h2>{title}</h2>
                <p>
                  CookTime : {cookTime}min | PrepTime : {prepTime}min
                </p>
              </div>
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default RecipesList;
