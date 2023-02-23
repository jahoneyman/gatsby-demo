import React from "react";
import { Link } from "gatsby";

import FEATURES from "../../../../constants/features";
import Heading from "../../../shared/heading";

const Features = () => {
  const featuresBody = FEATURES.features;

  return (
    <section className="flex items-center justify-center bg-gray-1 py-24">
      <div className="text-center mx lg:w-[1000px] 2lg:w-[1100px]">
        <Heading className="text-primary-1 mx-8 mb-14 scale-90 2lg:scale-100" tag="h1" size="xl">
          <div className="text-5xl md:text-7xl">Meet your new all-in-one money app</div>
        </Heading>
        <ul className="grid grid-cols-2 md:flex justify-evenly items-center md:items-start">
          {featuresBody.map(({ name, description, image, alt_image }, index) => {
            return (
              <li key={index} className="md:w-1/4 px-4">
                <img src={image} alt={alt_image} className="mx-auto" />
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
