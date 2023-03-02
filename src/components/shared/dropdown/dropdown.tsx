import React from "react";
import { Link } from "gatsby";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ items }): JSX.Element => {
  return (
    <div className="absolute top-14 invisible opacity-0 transition-[opacity,visibility] duration-200 group-hover:opacity-1 group-hover:visible group-hover:opacity-100 hover:opacity-1 hover:visible hover:opacity-100 group-hover:block hover:block z-10">
      {/* First SubItems */}
      <ul
        className={clsx(
          "bg-white p-3.5 rounded-xl text-black",
          items.length > 8 && "grid grid-cols-2"
        )}
        style={{ boxShadow: "0px 4px 10px rgba(26, 26, 26, 0.2)" }}
      >
        {items.map((item, index) => {
          const subItems = item.items?.map((sItem) => sItem);
          const Tag = item.to ? Link : "button";

          return (
            <li key={index} className="group/sub flex group-hover:block hover:block">
              <Tag
                to={item.to}
                className="py-3.5 px-2 w-full hover:bg-primary-2 rounded-xl flex items-center justify-between"
              >
                {item.text}
                {subItems?.length > 0 && (
                  <FontAwesomeIcon icon={faChevronRight} className="ml-1 pl-24 text-[10px]" />
                )}
              </Tag>
              {/* Second SubItems */}
              {subItems && (
                <div className="absolute left-48 invisible opacity-0 transition-[opacity,visibility] duration-200 group-hover/sub:opacity-1 group-hover/sub:visible group-hover/sub:opacity-100">
                  <ul
                    className="bg-white p-2 rounded-xl w-52"
                    style={{ boxShadow: "0px 4px 10px rgba(26, 26, 26, 0.2)" }}
                  >
                    {subItems?.map((sItem, sIndex) => (
                      <li key={sIndex} className="p-2 rounded-xl hover:bg-primary-2">
                        <Link to={sItem.to}>{sItem.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
