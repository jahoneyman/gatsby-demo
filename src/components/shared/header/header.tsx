import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import clsx from "clsx";

import Dropdown from "../dropdown";

import MENUS from "../../../constants/menus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowUpRightFromSquare, faX } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    handleHeading();
    handleSubHeading();
  };

  const handleHeading = (itemHeading: string = "") => {
    setHeading(heading === itemHeading ? "" : itemHeading);
  };

  const handleSubHeading = (subItemHeading: string = "") => {
    setSubHeading(subHeading === subItemHeading ? "" : subItemHeading);
  };

  const handleWindowWidthResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleStickNav = () => {
    window.scrollY > 90 && setStickyNav(true);
    window.scrollY === 0 && setStickyNav(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowWidthResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleStickNav);
  }, []);

  return (
    <header
      className={clsx(
        "bg-gray-1 w-full text-white font-medium py-1 transition-all duration-200",
        stickyNav && "fixed z-10"
      )}
    >
      <nav className="flex items-center justify-between mx-5 2lg:mx-auto 2lg:w-[1100px] xl:w-[1200px] z-[100]">
        <div className="flex items-center">
          <button onClick={handleIsOpen} className="mr-2 scale-110 2lg:hidden">
            {isOpen ? (
              <FontAwesomeIcon icon={faX} />
            ) : (
              <ul>
                <span className="block w-4 h-[2.5px] mb-1 bg-white rounded z-[1]"></span>
                <span className="block w-6 h-[2.5px] mb-1 bg-white rounded z-[1]"></span>
                <span className="block w-3 h-[2.5px] mb-1 bg-white rounded z-[1]"></span>
              </ul>
            )}
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
                  {/* link.name */}
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
                  {/* link.submenu */}
                  {items.length > 0 && <Dropdown items={items} />}
                </li>
              );
            })}
          </ul>
          <div className="ml-8">
            <Link
              to="/"
              className="flex justify-center items-center py-2 px-3 text-accent-1 font-bold rounded-2xl bg-primary-1 transition-transform duration-200 hover:scale-110"
            >
              <div className="border-2 border-transparent rounded-2xl text-sm">Get the App</div>
            </Link>
          </div>
        </nav>
      </nav>
      {/* Mobile View */}
      <nav
        className={clsx(
          "2lg:hidden text-sm absolute duration-500 w-full pb-2 pt-16 bg-gray-1 z-[-1]",
          !isOpen || windowWidth > 1140 ? "top-[-100%] invisible opacity-0" : "top-0 opacity-100 "
        )}
      >
        <ul className="">
          {MENUS.header.map(({ text, to, items = [], outside_icon = false }, index) => {
            const Tag = to ? Link : "button";
            return (
              <div key={index} className="text-lg">
                <li
                  onClick={() => handleHeading(text)}
                  className="2lg:flex items-center p-6 transition-colors duration-200 hover:bg-gray-2 cursor-pointer"
                >
                  <Tag to={to!} className={clsx("2lg:flex justify-center items-center")}>
                    {text}
                    {items.length > 0 && (
                      <FontAwesomeIcon icon={faChevronDown} className="pl-1 text-primary-1" />
                    )}
                    {outside_icon && (
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="pl-2 text-primary-1 text-[10px]"
                      />
                    )}
                  </Tag>
                </li>
                {items.length > 0 && (
                  <ul className={clsx(heading !== text && "hidden")}>
                    {items.map(({ text, to, items = [] }, index) => {
                      const subItems = items.map((sItem) => sItem);
                      const Tag = to ? Link : "button";
                      return (
                        <div key={index}>
                          <li
                            onClick={() => handleSubHeading(text)}
                            className="py-3 px-10 transition-colors duration-200 hover:bg-gray-2 "
                          >
                            <Tag to={to!} className="flex items-center w-full py-3">
                              {text}
                              {items.length > 0 && (
                                <FontAwesomeIcon
                                  icon={faChevronDown}
                                  className="pl-2 text-primary-1 text-[14px]"
                                />
                              )}
                            </Tag>
                          </li>
                          {subItems && (
                            <div>
                              <ul className={clsx(subHeading !== text && "hidden")}>
                                {subItems?.map((sItem, sIndex) => {
                                  return (
                                    <li
                                      key={sIndex}
                                      className="px-16 py-6 transition-colors duration-200 hover:bg-gray-2"
                                    >
                                      <Link to={sItem.to!}>{sItem.text}</Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
