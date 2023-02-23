import React, { useState } from "react";
import clsx from "clsx";

import Heading from "./../../../shared/heading";

const images = [
  "https://via.placeholder.com/300x200?text=Slide%201",
  "https://via.placeholder.com/300x200?text=Slide%202",
  "https://via.placeholder.com/300x200?text=Slide%203",
  "https://via.placeholder.com/300x200?text=Slide%204",
];

const items = [
  {
    title: "Upgrade",
    body: "Open a savings account, bump your wallet limit and more",
    button_text: "Upgrade your account",
    icon: "Arrow up",
  },
  {
    title: "Create an Account",
    body: "Get started with your new go-to money app and start sending, shopping, saving, and growing",
    button_text: "Create an Account",
    icon: "Person+",
  },
  {
    title: "Cash In",
    body: "Cash in via banks, self-service kiosks, debit and credit cards, and other channels",
    button_text: "Tell me more",
    icon: "Wallet",
  },
  {
    title: "Claim Remittance",
    body: "Enjoy receiving money from our partners in the comfort of your home",
    button_text: "Tell me more",
    icon: "Kiosk",
  },
];

const Guide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  return (
    <section className="flex items-center justify-center bg-gray-1 py-24 px-8">
      <div>
        <Heading className="text-white mb-20" size="lg" tag="div">
          <span className="text-base tracking-wider">USER GUIDE</span>
          <h1 className="text-3xl text-primary-1">How to make the most out of Maya</h1>
          <p className="text-base font-normal mt-2">
            See how Maya gives you power over your finances with these step by step guides
          </p>
        </Heading>
        {/* cards */}
        {/* <div className="text-white">
          <div className="bg-gray-3 h-[530px] rounded-3xl flex flex-col items-center justify-between p-8">
            <div>
              <div className="text-2xl font-bold mb-2">Upgrade Account</div>
              <div className="mb-8">Open a savings account, bump your wallet limit and more</div>
              <div className="text-center py-4 bg-primary-1 text-lg text-gray-1 font-bold rounded-2xl w-5/6">
                Upgrade your account
              </div>
            </div>
            <div>Icon</div>
          </div>
        </div> */}
        {/* <div className="relative">
          <ul
            className="flex overflow-y-hidden overflow-x-scroll scroll-smooth text-white"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {items.map(({ title, body, button_text, icon }, index) => {
              return (
                <li
                  key={index}
                  className={clsx(
                    "snap-start transition-opacity duration-500 ease-in-out bg-gray-3 rounded-2xl",
                    index === currentIndex && "opacity-1"
                  )}
                  style={{ flex: "0 0 100%" }}
                  // className="bg-gray-3 h-[530px] rounded-3xl flex flex-col items-center justify-between p-8"
                >
                  <div className="w-full h-full object-cover py-8">
                    <div className="text-2xl font-bold mb-2">{title}</div>
                    <div className="mb-8">{body}</div>
                    <div className="text-center py-4 bg-primary-1 text-lg text-gray-1 font-bold rounded-2xl w-5/6">
                      {button_text}
                    </div>
                  </div>
                  <div>{icon}</div>
                </li>
              );
            })}
          </ul>
          <button
            onClick={previousSlide}
            className="absolute top-1/2 -translate-y-1/2 w-[50px] h-[50px] text-white bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)]  border-none rounded-[50%] text-2xl font-bold transition-colors duration-300 ease-in-out left-2"
          >
            &#60;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 w-[50px] h-[50px] text-white bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] border-none rounded-[50%] text-2xl font-bold transition-colors duration-300 ease-in-out right-2"
          >
            &#62;
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Guide;
