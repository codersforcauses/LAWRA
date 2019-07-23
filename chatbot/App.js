import React, { useState } from "react";
import LAWRAIntroImg from "./LAWRAIntroImg";
import ChatBot from "./ChatBot";

const App = () => {
  const [lawraImgClosedClick, setLawraImgClosedClick] = useState(false);
  const [lawraImgOpenedClick, setLawraImgOpenedClick] = useState(false);
  return (
    <div>
      {(lawraImgClosedClick || lawraImgOpenedClick) && (
        <ChatBot opened={lawraImgOpenedClick} />
      )}

      {!lawraImgClosedClick && !lawraImgOpenedClick && (
        <LAWRAIntroImg
          lawraImgClosedClick={setLawraImgClosedClick}
          lawraImgOpenedClick={setLawraImgOpenedClick}
        />
      )}
    </div>
  );
};

export default App;
