import "./styles.css";
import { Link } from "react-router-dom";

interface TabBarItemProps {
  icon: string;
  iconName: string;
  link: string;
}

const TabBarItem = (props: TabBarItemProps) => {
  return (
    <Link to={props.link} className="tabBarItem">
      <img className="iconButton" alt="Compose Button" src={props.icon} />
      <span id="iconName">{props.iconName}</span>
    </Link>
  );
};
export default TabBarItem;
