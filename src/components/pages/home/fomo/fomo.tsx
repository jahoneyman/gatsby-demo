import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Heading from "../../../shared/heading";
import TextInput from "../../../shared/textInput";

const Fomo = () => {
  return (
    <section className="flex items-center justify-center bg-gray-1 py-24 text-white">
      <div className="bg-gray-3 mx-8 w-full h-[550px] py-12 px-3 rounded-3xl text-center md:text-start md:w-[950px] flex flex-col md:flex-row items-center justify-between md:justify-center">
        <div className="mx-12">
          <StaticImage
            src="../../../../assets/images/fomo/mailbox.png"
            alt="mailbox"
            placeholder="blurred"
          />
        </div>
        <div>
          <Heading tag="div" className="text-primary-1 lg:mb-5">
            <h1 className="text-4xl font-bold py-7">No more FOMO</h1>
          </Heading>
          <p className="text-xl font-semibold mb-8">Stay updated on Maya's deal and promos</p>
          <div>
            <TextInput
              placeholderText="Enter your email here"
              textInputBgColor="bg-gray-5"
              placeholderColor="placeholder-gray-4"
              buttonText="Subscribe"
              buttonColor="bg-primary-1"
              className="w-11/12 md:w-[400px] lg:w-[450px] transition-all duration-300 focus:outline-none focus:border focus:border-primary-1 py-3.5 px-6 rounded-2xl font-medium"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fomo;
