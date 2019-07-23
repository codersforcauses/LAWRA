import React, { useState } from "react";
import LAWRA_intro_path from "./LAWRA_intro.png";

export default () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      {!hide && (
        <>
          <img
            src={LAWRA_intro_path}
            className="lawra-intro-img"
            usemap="#lawra"
          />
          <map name="#lawra">
            <area
              shape="rect"
              coords="130, 170, 250, 225"
              onClick={() => alert("helo")}
            />
            <area
              shape="circle"
              coords="0, 0,40,40"
              onClick={() => setHide(true)}
            />
          </map>
        </>
      )}
    </>
  );
};
