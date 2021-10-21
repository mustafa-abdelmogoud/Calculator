import { Button } from "../../components/button";

import style from "./operand.css";

export const Operand = ({ operand, onClick }) => {
  return (
    <div className="operations-container">
      {Object.values(operand).map((button) => {
        return (
          <Button
            name={button.value}
            key={button.value}
            className={button.class}
            onClick={() => onClick(button.handler)}
          />
        );
      })}
    </div>
  );
};
