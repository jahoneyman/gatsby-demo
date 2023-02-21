import React from "react";
import { Link } from "gatsby";

import Heading from "../../../shared/heading";
import FEATURES from "../../../../constants/features";

const Features = () => {
  const featuresBody = FEATURES.features;
  console.log(featuresBody);

  return (
    <section className="h-screen flex items-center justify-center bg-gray-1">
      <div className="text-center w-[1260px]">
        <Heading className="text-primary-1" tag="h1" size="xl">
          <h1>Meet your new</h1>
          <h1>all-in-one money app</h1>
        </Heading>
        <ul className="flex justify-evenly">
          {featuresBody.map(({ name, description, image }, index) => {
            return (
              <li key={index} className="w-1/4 px-4">
                <div>{image}</div>
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
