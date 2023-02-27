import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Heading from "./../../../shared/heading/heading";

interface upgradeProps {}

interface IUpgrade {
  icon: string;
  text: string;
}
const items: IUpgrade[] = [
  {
    icon: "💰",
    text: "Open a savings account with up to 6% interest",
  },
  {
    icon: "₿",
    text: "Buy and sell crypto",
  },
  {
    icon: "⚡",
    text: "Get access to instant credit",
  },
  {
    icon: "💳",
    text: "Shop online or in-store with a physical or virtual wallet card",
  },
  {
    icon: "💪",
    text: "Max your monthly wallet limit from ₱50K to ₱100K",
  },
];

export const Upgrade: React.FC<upgradeProps> = ({}) => {
  return (
    <section className="flex items-center justify-center bg-gray-1 py-24 text-white">
      <div className="bg-card-0 w-full flex flex-col md:flex-row-reverse pt-20 rounded-3xl px-5 mx-8 md:mx-0 md:w-[1200px]">
        <div>
          <Heading className="text-3xl font-semibold mb-4" tag="div">
            <div>Upgrade your account</div>
          </Heading>
          <p className="text-lg">
            Access banking features, get a more personalized experience, and bump up your wallet
            limit
          </p>
          <div className="mt-3">
            <ul>
              {items.map(({ icon, text }, index) => (
                <li key={index} className="flex mt-5">
                  <div className="mr-5 w-1/12 text-primary-1 text-center">{icon}</div>
                  <div className="w-11/12">{text}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16 flex justify-center md:justify-start">
            <button className="bg-primary-1 text-lg text-gray-1 font-semibold py-4 px-5 tracking-wider rounded-2xl transition-transform duration-200 hover:scale-105">
              Tell me more
            </button>
          </div>
        </div>
        <div className="md:w-9/12 flex items-center justify-center mt-10">
          <StaticImage
            src="../../../../assets/images/upgrade/upgrade.png"
            alt="upgrade"
            placeholder="blurred"
            className="mx-auto flex justify-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
