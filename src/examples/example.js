import React from "react";

import { useStaticQuery, graphql } from "gatsby";
const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        person {
          age
          name
        }
        simpleData
        title
      }
    }
  }
`;

const FetchData = () => {
  const data = useStaticQuery(getData);

  return (
    <div>
      <h2>Name : {data.site.info.author}</h2>
    </div>
  );
};

export default FetchData;
