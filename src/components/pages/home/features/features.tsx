import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import FEATURES from "../../../../constants/features";
import Heading from "../../../shared/heading";

const Features = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allImageSharp {
        nodes {
          id
          fluid {
            src
            srcSet
          }
        }
      }
    }
  `);

  const featuresBody = FEATURES.features;

  return (
    <section className="h-screen flex items-center justify-center bg-gray-1">
      <div className="text-center w-[1260px]">
        <Heading className="text-primary-1 my-14" tag="h1" size="xl">
          <h1>Meet your new</h1>
          <h1>all-in-one money app</h1>
        </Heading>
        <ul className="flex justify-evenly">
          {featuresBody.map(({ name, description, image: imgName, alt_image }, index) => {
            const image = "./images/" + imgName;

            return (
              <li key={index} className="w-1/4 px-4">
                {/* <StaticImage src="" alt={alt_image} /> */}
                <h1 className="text-primary-1 text-4xl font-bold pb-4">{name}</h1>
                <p className="text-white pb-8">{description}</p>
              </li>
            );
          })}
        </ul>
        <div className="text-2xl text-white font-bold">
          <Link to="/" className="pb-2 border-b-4 border-primary-1">
            and more!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
