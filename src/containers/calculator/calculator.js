import { useState } from "react";

import { Screen } from "../../components/screen";
import { Error } from "../../components/error";
import { Numbers } from "../numbers";
import { Operand } from "../operand";
import { NUMBERS } from "./numbers-config";
import { OPERAND } from "../calculator/operand-config";

import style from "./calculator.css";

export const Calculator = () => {
  const [screenContent, setScreenContent] = useState("");
  const [error, setError] = useState("");

  const handleOnClick = (handler) => {
    const newContent = handler(screenContent);

    const isError = newContent.includes("Invalid");

    if (isError) {
      setError(newContent);
    } else {
      setScreenContent(newContent);
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        {error && <Error msg={error} />}
        <Screen value={screenContent} />
        <div className="buttons-container">
          <Numbers onClick={handleOnClick} numbers={NUMBERS} />
          <Operand onClick={handleOnClick} operand={OPERAND} />
        </div>
      </div>
    </div>
  );
};
