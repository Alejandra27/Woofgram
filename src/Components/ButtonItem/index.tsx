import "./styles.css";
import { ReactElement } from "react";

interface ButtonItemProps {
  description: string;
  icon: ReactElement;
}

const ButtonItem = (props: ButtonItemProps) => {
  return (
    <div className="buttonItem">
      {props.icon}
      <span id="description">{props.description}</span>
    </div>
  );
};

export default ButtonItem;
