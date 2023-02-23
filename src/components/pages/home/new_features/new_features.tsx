import React, { useState } from "react";
import Heading from "./../../../shared/heading";
import clsx from "clsx";

const items = [
  {
    available: true,
    title: "PayMaya is now Maya",
    body: "That’s right, we’re more than a wallet now. We’ve got our own digital bank, crypto exchange, and so much more.",
    button_text: "Discover Maya",
    icon: "icon",
  },
  {
    available: true,
    title: "What? You can get your very own Maya physical card?",
    body: "That’s right! Get your own sleek, black, and suave Maya card so you can handle your transactions in just a tap or a swipe.",
    button_text: "Get a Maya card",
    icon: "icon",
  },
  {
    available: false,
    title: "We’ve got everything—and dark mode too",
    body: "Maya now comes with one of the greatest innovations of the 21st century. That’s right, we’ve got dark mode now! We hear it puts less strain on the eyes and saves battery (but we think it’s nice to look at, too!).",
    button_text: "",
    icon: "icon",
  },
  {
    available: true,
    title: "We’re making it rain with 6% interest",
    body: "Money doesn’t grow on trees, but with Maya’s 6% interest rate your money can certainly grow as if it did",
    button_text: "Start saving with Maya",
    icon: "icon",
  },
  {
    available: true,
    title: "Zero to ₱15,000 in seconds",
    body: "Get approval of up to ₱15,000 credit line with Maya Credit!",
    button_text: "Apply to Maya Credit",
    icon: "icon",
  },
  {
    available: true,
    title: "Did you know you can send money using @usernames?",
    body: "Don't have a friend's bank account memorized? Too many details to enter? Well, with Maya, all you need is your receiver's username and you're ready to send away.",
    button_text: "Create your @username now",
    icon: "icon",
  },
  {
    available: true,
    title: "Crypto for all",
    body: "Not sure where to start? We got you.\nCash in. Buy. Hodl. Sell. Save. Spend. Learn. All in one app.",
    button_text: "Tell me more",
    icon: "Tell me more",
  },
];

const NewFeatures = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="flex items-center justify-center bg-gray-1 py-24 px-8">
      <div>
        <div className="text-center">
          <div className="text-white text-xl tracking-wider font-bold">WHAT'S NEW</div>
          <Heading className="leading-tight text-primary-1 text-start" tag="div" size="md">
            <h1>Your Money. Your Way.</h1>
          </Heading>
        </div>

        <ul className="text-white relative">
          {/* card */}
          {items.map(({ title, body, button_text, icon, available }, index) => {
            return (
              <li
                key={index}
                className={clsx(
                  "flex flex-col items-center justify-between h-[600px] rounded-3xl p-8 my-12",
                  "bg-card-" + (index % 6),
                  !showAll && index > 2 && "hidden"
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
                  <h1>{icon}</h1>
                </div>
              </li>
            );
          })}

          <button
            onClick={handleShowAll}
            className="absolute left-[25%] top-[98%] bg-primary-1 text-lg text-gray-1 font-semibold py-4 px-5 tracking-wider rounded-2xl transition-transform duration-200 hover:scale-105"
          >
            Show me {showAll ? "less" : "more"}
          </button>
        </ul>
      </div>
    </section>
  );
};

export default NewFeatures;
