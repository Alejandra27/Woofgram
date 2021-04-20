import "./styles.css";

interface TabBarIconProps {
  icon: string;
  iconName: string;
}

const TabBarIcon = (props: TabBarIconProps) => {
  return (
    <div>
      <img className="iconButton" alt="Compose Button" src={props.icon} />
      <p id="iconName">{props.iconName}</p>
    </div>
  );
};
export default TabBarIcon;
