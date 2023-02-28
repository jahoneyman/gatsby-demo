import React from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faTelegramPlane,
  faLinkedinIn,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const platformItems = [
  {
    to: "https://www.facebook.com/mayaiseverything/",
    icon: faFacebookF,
  },
  {
    to: "https://twitter.com/mayaofficialph",
    icon: faTwitter,
  },
  {
    to: "https://www.instagram.com/mayaiseverything/",
    icon: faInstagram,
  },
  {
    to: "https://t.me/TeamMayaPH",
    icon: faTelegramPlane,
  },
  {
    to: "https://www.linkedin.com/company/mayaph",
    icon: faLinkedinIn,
  },
  {
    to: "https://www.youtube.com/channel/UCZxaBVA68d8LRb64Qw2ha5g",
    icon: faYoutube,
  },
  {
    to: "https://www.tiktok.com/@mayaiseverything",
    icon: faTiktok,
  },
];

const navItems = [
  {
    name: "Home",
    to: "",
  },
  {
    name: "User Guide",
    to: "",
  },
  {
    name: "Deals",
    to: "",
  },
  {
    name: "Store",
    to: "",
  },
  {
    name: "Partner Merchants",
    to: "",
  },
  {
    name: "Stories",
    to: "",
  },
  {
    name: "About Maya",
    to: "",
  },
  {
    name: "Help & Support",
    to: "",
  },
  {
    name: "Contact Us",
    to: "",
  },
];

const Footer = () => {
  return (
    <footer className="flex items-center bg-gray-1 pt-24 pb-12 text-white text-sm">
      <div className="px-4 w-full">
        <Link to="/" className="text-primary-1 font-bold text-3xl py-3">
          maya
        </Link>
        <ul className="flex mt-5">
          {platformItems.map(({ to, icon }, index) => (
            <li
              key={index}
              className="flex items-center justify-center text-white bg-black p-5 mr-2 w-6 h-6 rounded-full cursor-pointer transition-colors duration-200 hover:bg-white hover:text-black"
            >
              <Link to={to} className="mt-1">
                <FontAwesomeIcon icon={icon} className="text-2xl" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-5">
          <li className="flex justify-evenly">
            <div className="w-2/12 pt-1 text-center text-primary-1">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="w-10/12">
              <ul className="text-sm leading-6">
                <li>Maya Customer Hotline: (+632) 8845-7788</li>
                <li>Domestic Toll-Free: 1-800-1084-57788</li>
                <li>Mobile: Dial *788 using your Smart mobile phone</li>
              </ul>
            </div>
          </li>
          <li className="flex mt-3">
            <div className="w-2/12 pt-1 text-center text-primary-1">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="w-10/12">
              <Link
                to="/"
                className="text-sm underline transition-colors duration-200 hover:text-primary-1"
              >
                support@maya.ph
              </Link>
            </div>
          </li>
        </ul>
        <div className="mt-5 leading-6">
          <p>
            Maya is powered by the country's only end-to-end digital payments company Maya
            Philippines, Inc. and Maya Bank, Inc. for digital banking services. Maya Philippines,
            Inc. and Maya Bank, Inc. are regulated by the Bangko Sentral ng Pilipinas.
          </p>
          <h4 className="text-sm underline transition-colors duration-200 hover:text-primary-1">
            <Link to="">www.bsp.gov.ph</Link>
          </h4>
        </div>
        <div>
          <ul className="mt-12 grid grid-rows-5 grid-flow-col gap-5 text-primary-1 text-base">
            {navItems.map(({ name, to }, index) => (
              <li>
                <Link to={to} className="transition-colors duration-200 hover:text-white">
                  {name}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className={clsx(
                      "text-xs ml-1",
                      name === "Store" || name === "Help & Support" ? "inline-block" : "hidden"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/12 mt-16">
          <Link to="https://seal.controlcase.com/index.php?page=showCert&cId=3984518998">
            <StaticImage src="../../../assets/images/footer/compliancebadge.webp" alt="" />
          </Link>
        </div>
        <div className="mt-12">
          <ul className="grid grid-cols-2 gap-4 w-8/12">
            <li>
              <Link to="https://www.maya.ph/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="https://www.maya.ph/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li className="col-span-2">© Copyright Maya 2022 All rights reserved.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
