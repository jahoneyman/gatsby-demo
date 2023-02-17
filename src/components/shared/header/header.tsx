import React from "react";
import { Link } from "gatsby";
import clsx from "clsx";

import MENUS from "../../../constants/menus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-gray-1 text-white font-medium py-1">
      <div className="flex items-center justify-between w-[1200px] mx-auto">
        <Link to="/" className="text-primary-1 font-black text-3xl py-3">
          maya
        </Link>
        <nav className="flex justify-between">
          <ul className="flex text-sm">
            {MENUS.header.map(({ text, to, items = [], outside_icon = false }, index) => {
              const Tag = to ? Link : "button";
              return (
                <li
                  key={index}
                  className="flex items-center mr-[10px] py-3 px-2 transition-colors duration-200 rounded-md hover:bg-gray-2 cursor-pointer"
                >
                  <Tag to={to!} className={clsx("")}>
                    {text}
                    {items.length > 0 && (
                      <FontAwesomeIcon icon={faChevronDown} className="pl-1 text-primary-1" />
                    )}
                    {outside_icon && (
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="pl-1 text-primary-1"
                      />
                    )}
                  </Tag>
                </li>
              );
            })}
          </ul>
          <div className="ml-8">
            <Link
              to="/"
              className="flex justify-center items-center p-2 text-accent-1 font-bold rounded-3xl bg-primary-1 border-2 border-transparent transition-transform duration-200 hover:scale-110"
            >
              <div className="border-2 border-transparent rounded-3xl">Get the App</div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
