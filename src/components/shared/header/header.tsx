import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import clsx from "clsx";

import MENUS from "../../../constants/menus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleWindowWidthResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowWidthResize);
  }, []);

  return (
    <header className="bg-gray-1 w-full text-white font-medium py-1">
      <div className="flex items-center justify-between mx-5 2lg:mx-auto 2lg:w-[1100px] xl:w-[1200px]">
        <div className="flex items-center">
          <button onClick={handleIsOpen} className="mr-2 scale-110 2lg:hidden">
            <span className="block w-4 h-[2.5px] mb-1 bg-white rounded z-[1]"></span>
            <span className="block w-6 h-[2.5px] mb-1 bg-white rounded z-[1]"></span>
            <span className="block w-3 h-[2.5px] mb-1 bg-white rounded z-[1]"></span>
          </button>
          <Link to="/" className="text-primary-1 font-bold text-3xl py-3">
            maya
          </Link>
        </div>
        <nav className="flex justify-between">
          <ul className={clsx("hidden 2lg:flex text-sm")}>
            {MENUS.header.map(({ text, to, items = [], outside_icon = false }, index) => {
              const Tag = to ? Link : "button";

              return (
                <li
                  key={index}
                  className="flex items-center mr-[10px] py-3 px-2 transition-colors duration-200 rounded-md hover:bg-gray-2 cursor-pointer group"
                >
                  <Tag to={to!} className={clsx("flex justify-center items-center")}>
                    {text}
                    {items.length > 0 && (
                      <FontAwesomeIcon icon={faChevronDown} className="pl-1 text-primary-1" />
                    )}
                    {outside_icon && (
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="pl-1 text-primary-1 text-[10px]"
                      />
                    )}
                  </Tag>
                  {items?.length > 0 && (
                    <div className="group-hover:opacity-1 invisible absolute pt-4 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100">
                      <ul
                        className="rounded-2xl bg-white p-3.5"
                        style={{ boxShadow: "0px 4px 10px rgba(26,26,26,0.2)" }}
                      >
                        {items.map(({ text, to, items = [] }, index) => {
                          return (
                            <li
                              key={index}
                              className={clsx(
                                index !== 0 && "mt-3.5 border-t text-black border-t-gray-1 pt-3.5"
                              )}
                            >
                              <Link to="/">
                                <span className="ml-3">
                                  <span className="text-xl block font-semibold !leading-none transition-colors duration-200">
                                    {text}
                                  </span>
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="ml-8">
            <Link
              to="/"
              className="flex justify-center items-center py-2 px-3 text-accent-1 font-bold rounded-2xl bg-primary-1 border-2 border-transparent transition-transform duration-200 hover:scale-110"
            >
              <div className="border-2 border-transparent rounded-2xl text-sm">Get the App</div>
            </Link>
          </div>
        </nav>
      </div>
      <nav className="mx-3">
        <ul className={clsx("lg:hidden text-sm", (!isOpen || windowWidth > 1024) && "hidden")}>
          {MENUS.header.map(({ text, to, items = [], outside_icon = false }, index) => {
            const Tag = to ? Link : "button";
            return (
              <li
                key={index}
                className="flex items-center mr-[10px] py-3 px-2 transition-colors duration-200 rounded-md hover:bg-gray-2 cursor-pointer"
              >
                <Tag to={to!} className={clsx("flex justify-center items-center")}>
                  {text}
                  {items.length > 0 && (
                    <FontAwesomeIcon icon={faChevronDown} className="pl-1 text-primary-1" />
                  )}
                  {outside_icon && (
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="pl-1 text-primary-1 text-[10px]"
                    />
                  )}
                </Tag>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
