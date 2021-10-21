import style from "./screen.css";

export const Screen = ({ value }) => {
  return (
    <p data-testid="screen" className="screen">
      {value}
    </p>
  );
};
