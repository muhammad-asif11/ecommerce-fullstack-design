import React from "react";
import { Icon } from "./Icon";
import { IconName } from "../utills/const";
type Props = {
  title: string;
  style: string;
  icon?: IconName;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  
};
const Button = ({ title, onClick, style, icon, type }: Props) => {
  return (
    <button type={type} onClick={onClick} className={style}>
      {icon && <Icon name={icon} size={20} />}
      {title}
    </button>
  );
};

export default Button;
