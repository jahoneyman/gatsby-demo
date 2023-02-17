import clsx from "clsx";
import React from "react";
import MENUS from "../../../constants/menus";

const Header = () => {
  console.log(
    MENUS.header.map(({ text, to, items }, index) => console.log(text, to, items, index))
  );

  return (
    <div className="flex justify-between items-center bg-gray-1 text-white py-3 px-8 text-sm ">
      <div className="text-primary-1 font-black text-3xl">maya</div>
      <nav>
        <ul className="flex">
          {MENUS.header.map(({ text, to, items = [] }, index) => {
            const Tag = to ? "h1" : "p";
            return (
              <li key={index} className="mr-[10px]">
                <Tag className={clsx("p-2")}>{text}</Tag>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>app</div>
    </div>
  );
};

export default Header;
