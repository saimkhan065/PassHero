import React from "react";

interface ButtonProps {
  name: "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return <button type={name}>{name}</button>;
};

export default Button;
