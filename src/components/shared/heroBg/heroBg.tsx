import React from "react";

import Hero from "../../../assets/videos/hero.webm";

const HeroBg = () => {
  return <video src={Hero} autoPlay loop muted className="object-cover" />;
};

export default HeroBg;
