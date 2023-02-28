import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Heading from "../../../shared/heading";
import TextInput from "../../../shared/textInput";

const Fomo = () => {
  return (
    <section className="flex items-center justify-center bg-gray-1 py-24 text-white">
      <div className="bg-gray-3 mx-8 w-full py-8 px-3 rounded-3xl text-center">
        <StaticImage
          src="../../../../assets/images/fomo/mailbox.png"
          alt="mailbox"
          placeholder="blurred"
        />
        <Heading tag="div" className="text-primary-1">
          <h1 className="text-3xl font-bold">No more FOMO</h1>
        </Heading>
        <p className="text-xl font-semibold mb-8">Stay updated on Maya's deal and promos</p>
        <TextInput
          placeholderText="Enter your email here"
          textInputBgColor="bg-gray-5"
          placeholderColor="placeholder-gray-4"
          buttonText="Subscribe"
          buttonColor="bg-primary-1"
          className="w-11/12 py-3.5 px-6 rounded-2xl font-medium"
        />
      </div>
    </section>
  );
};

export default Fomo;
