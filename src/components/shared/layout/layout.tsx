import React from "react";
import Header from "../header";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayout> = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
