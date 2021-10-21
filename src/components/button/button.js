import style from "./button.css";

export const Button = ({ name, onClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {name}
    </button>
  );
};
