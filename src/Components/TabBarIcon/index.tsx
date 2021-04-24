import "./styles.css";
import { Link } from "react-router-dom";

interface TabBarIconProps {
  icon: string;
  iconName: string;
  link: string;
}

const TabBarIcon = (props: TabBarIconProps) => {
  return (
    <Link to={props.link}>
      <img className="iconButton" alt="Compose Button" src={props.icon} />
      <span id="iconName">{props.iconName}</span>
    </Link>
  );
};
export default TabBarIcon;
