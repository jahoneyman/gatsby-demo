import React from "react";
import Header from "../header";
import Footer from "../footer";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayout> = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
