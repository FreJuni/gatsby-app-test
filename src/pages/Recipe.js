import React from "react";
import Layout from "../Layout/Layout";
import Allrecipes from "../component/Allrecipes";
import SEO from "../component/SEO";

const Recipe = () => {
  return (
    <Layout>
      <SEO titl="Recipes" />
      <section className="center-con">
        <div className="recipes-con">
          <Allrecipes />
        </div>
      </section>
    </Layout>
  );
};

export default Recipe;
