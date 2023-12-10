import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const query = graphql`
  query {
    allFile {
      nodes {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: CONSTRAINED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;

const Gallery = () => {
  const Data = useStaticQuery(query);
  const Nodes = Data.allFile.nodes;

  return (
    <div>
      {Nodes.map((item, index) => {
        const Image = getImage(item);

        return (
          <div key={index} className="image-container">
            <GatsbyImage
              image={Image}
              alt="gallery-image"
              className="image-con"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
