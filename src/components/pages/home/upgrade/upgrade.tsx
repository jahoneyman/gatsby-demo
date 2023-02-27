import React from "react";
import Heading from "./../../../shared/heading/heading";

interface upgradeProps {}

interface IUpgrade {
  icon: string;
  text: string;
}
const items: IUpgrade[] = [
  {
    icon: "b",
    text: "Open a savings account with up to 6% interest",
  },
  {
    icon: "b",
    text: "Buy and sell crypto",
  },
  {
    icon: "b",
    text: "Get access to instant credit",
  },
  {
    icon: "b",
    text: "Shop online or in-store with a physical or virtual wallet card",
  },
  {
    icon: "b",
    text: "Max your monthly wallet limit from ₱50K to ₱100K",
  },
];

export const Upgrade: React.FC<upgradeProps> = ({}) => {
  return (
    <section className="flex items-center justify-center bg-gray-1 py-24 px-8 text-white">
      <div className="bg-card-0 w-full flex flex-col py-20 rounded-3xl px-5">
        <Heading className="text-2xl font-bold mb-4" tag="div">
          <div>Upgrade your account</div>
        </Heading>
        <p className="text-lg">
          Access banking features, get a more personalized experience, and bump up your wallet limit
        </p>
        <div className="mt-3">
          <ul>
            {items.map(({ icon, text }, index) => (
              <li key={index} className="flex mt-5">
                <div className="mr-5">{icon}</div>
                <div>{text}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 flex justify-center">
          <button className="bg-primary-1 text-lg text-gray-1 font-semibold py-4 px-5 tracking-wider rounded-2xl transition-transform duration-200 hover:scale-105 sm:hidden">
            Tell me more
          </button>
        </div>
        <div>icon</div>
      </div>
    </section>
  );
};

export default Upgrade;
