import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const SEO = ({ titl, descriptio }) => {
  const data = useStaticQuery(query);
  const { title, description } = data.site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${titl}`}
      meta={[{ name: `description`, content: description }]}
    ></Helmet>
  );
};

export default SEO;
