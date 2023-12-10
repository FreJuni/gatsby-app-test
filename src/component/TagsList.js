import React from "react";
import SetupTags from "../pages/setupTags";
import { Link } from "gatsby";
import slugify from "slugify";

const TagsList = ({ recipes }) => {
  const newTags = SetupTags(recipes);
  return (
    <article className="content-taps-con">
      <h3>Recipes</h3>
      <div className="content-taps-container">
        {newTags.map((item, index) => {
          const [text, value] = item;
          const textSlug = slugify(text, { lower: true });
          return (
            <div className="single-recipe" key={index}>
              <Link to={`/tag/${textSlug}`}>
                <p>
                  {text} ({value})
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default TagsList;
