import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Heading from "./../../../shared/heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Perks = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-1">
      <div className="2lg:w-[1100px]">
        <Heading
          className="flex flex-col lg:flex-row items-center justify-between mx-2 w-full"
          size="sm"
          tag="p"
        >
          <div className="flex items-center lg:w-[650px]">
            <StaticImage src="./images/gift.png" alt="icon of gift" />
            <div className="ml-5 md:ml-10">
              <span className="text-2xl md:text-3xl text-primary-1 font-bold">
                Perks all the way, baby!
              </span>
              <p className="text-base text-white font-normal">
                Earn cashback upon signing up, referring friends and buying gaming credits.
              </p>
            </div>
          </div>
          {/* Button */}
          <button className="mt-5 lg:mt-0 ml-8 bg-primary-1 rounded-2xl transition-transform duration-200 hover:scale-110">
            <Link
              to="/"
              className="flex justify-center items-center py-3.5 px-12 lg:px-24 font-semibold border-2 border-transparent"
            >
              <div className="border-2 border-transparent rounded-2xl text-lg lg:text-xl">
                Get the App
              </div>
            </Link>
          </button>
        </Heading>
        <div className="lg:flex text-white my-10">
          <div className="mb-4 lg:mb-0 bg-primary-3 rounded-xl mx-2 p-5">
            <Heading className="flex justify-between" size="xs" tag="h1">
              <div className="flex text-lg mb-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-primary-1 mr-5" />
                <p>Get ₱20 as a welcome reward when you sign up for Maya.</p>
              </div>
            </Heading>
            <p className="text-sm text-justify">
              Plus, enjoy an additional ₱40 when you upgrade and complete your first transaction
              like buy load, send money, open a savings account, invest in crypto and more, worth at
              least ₱20.
            </p>
          </div>
          <div className="bg-primary-3 rounded-xl mx-2 p-5">
            <Heading className="flex justify-between" size="xs" tag="h1">
              <div className="flex text-lg mb-2">
                <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-primary-1 mr-5" />
                <p>Earn up to ₱2,000 when you refer 20 friends to Maya.</p>
              </div>
            </Heading>
            <p className="text-sm text-justify">
              Every friend you refer to sign up, upgrade, and complete a transaction worth at least
              ₱20 using your code earns you ₱100. Complete your 20 referrals to earn ₱2,000.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perks;
