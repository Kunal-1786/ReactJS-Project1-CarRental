import React from "react";
import bg1 from "./assets/background/bg1.jpg";
import bg2 from "./assets/background/bg2.jpg";
import bg3 from "./assets/background/bg3.jpg";

const Background = ({heroCount}) => {
  if (heroCount === 0) {
    return <img src={bg1} className="background" />;
  } else if (heroCount === 1) {
    return <img src={bg2} className="background" />;
  } else if (heroCount === 2) {
    return <img src={bg3} className="background" />;
  }
};
export default Background;
