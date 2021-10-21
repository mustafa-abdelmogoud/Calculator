import { Button } from "../../components/button";

import style from "./numbers.css";

export const Numbers = ({ numbers, onClick }) => {
  return (
    <div className="numbers-container">
      {Object.values(numbers).map((button) => {
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
