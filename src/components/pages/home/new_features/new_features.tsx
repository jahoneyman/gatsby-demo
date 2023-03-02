import React, { useEffect, useState } from "react";
import clsx from "clsx";

import Heading from "./../../../shared/heading";

import FEATURES from "../../../../constants/new_features";

const NewFeatures = () => {
  const { features } = FEATURES;

  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowWidth);
  }, []);

  return (
    <section className="flex items-center justify-center bg-gray-1 py-24 px-8">
      <div className="lg:w-[1200px]">
        <div className="text-center mb-8">
          <div className="text-white text-xl tracking-wider font-bold">WHAT'S NEW</div>
          <Heading
            className="leading-tight text-primary-1 text-start lg:text-center"
            tag="div"
            size="md"
          >
            <h1>Your Money. Your Way.</h1>
          </Heading>
        </div>

        <ul className="text-white relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* card */}
          {features.map(({ title, body, button_text, available, color, image }, index) => {
            return (
              <li
                key={index}
                className={clsx(
                  "flex flex-col items-center justify-between h-[600px] rounded-3xl px-8 pt-8",
                  color,
                  !showAll && index > 2 && windowWidth < 768 && "hidden",
                  !showAll &&
                    index === 2 &&
                    windowWidth < 640 &&
                    "bg-gradient-to-b from-transparent to-gray-1",
                  index === features.length - 1 &&
                    windowWidth < 640 &&
                    "bg-gradient-to-b from-transparent to-gray-1"
                )}
              >
                <div>
                  {!available && (
                    <div className="bg-[#432ba3] w-max py-1 px-2 rounded-full mr-auto font-bold mb-4">
                      COMING SOON
                    </div>
                  )}
                  <h1 className="font-bold text-2xl mb-4">{title}</h1>
                  <p className="mb-6">{body}</p>
                  {button_text && (
                    <button className="bg-primary-1 text-lg text-gray-1 font-semibold py-4 px-5 tracking-wider rounded-2xl transition-transform duration-200 hover:scale-105">
                      {button_text}{" "}
                    </button>
                  )}
                </div>
                <div>
                  <img src={image} alt="" />
                </div>
              </li>
            );
          })}

          <button
            onClick={handleShowAll}
            className="absolute mx-auto left-0 right-0 w-52 top-[98%] bg-primary-1 text-lg text-gray-1 font-semibold py-4 px-5 tracking-wider rounded-2xl transition-transform duration-200 hover:scale-105 sm:hidden"
          >
            Show me {showAll ? "less" : "more"}
          </button>
        </ul>
      </div>
    </section>
  );
};

export default NewFeatures;
