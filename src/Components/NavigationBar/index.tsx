import React from "react";
import "./styles.css";

interface NavigationBarProps {
  leftButton?: React.ReactElement;
  title: string;
  rightButton?: React.ReactElement;
}

const NavigationBar = (props: NavigationBarProps) => {
  const blankButton = <span></span>;

  return (
    <div className="NavigationBar">
      {props.leftButton ?? blankButton}
      <h1>{props.title}</h1>
      {props.rightButton ?? blankButton}
    </div>
  );
};

export default NavigationBar;
