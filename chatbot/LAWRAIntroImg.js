import React, { useState } from "react";
import LAWRA_intro_path from "./LAWRA_intro.png";

export default ({ lawraImgClosedClick, lawraImgOpenedClick }) => {
  return (
    <>
      <img src={LAWRA_intro_path} className="lawra-intro-img" useMap="#lawra" />

      <map name="lawra">
        <area
          shape="rect"
          coords="130, 170, 250, 225"
          onClick={() => lawraImgOpenedClick(true)}
          href="#"
        />
        <area
          shape="circle"
          coords="0, 0,40,40"
          onClick={() => lawraImgClosedClick(true)}
          href="#"
        />
      </map>
    </>
  );
};
