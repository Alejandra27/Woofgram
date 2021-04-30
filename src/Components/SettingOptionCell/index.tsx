import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SettingCellProps {
  iconBackgroundColor: string;
  settingIcon: IconProp;
  description: string;
  chevronRight: IconProp;
}

const SettingCell = (props: SettingCellProps) => {
  return (
    <div className="settingCell">
      <div className="settingIconContainer">
        <div className="settingIcon">
          <FontAwesomeIcon
            icon={props.settingIcon}
            color={props.iconBackgroundColor}
            className="settingGlyph"
          />
        </div>
      </div>
      <div className="descriptionContainer">
        <span className="description">{props.description}</span>
      </div>
      <div className="nextPageContainer">
        <FontAwesomeIcon
          icon={props.chevronRight}
          color="rgb(187, 187, 187)"
          className="settingGlyph"
        />
      </div>
    </div>
  );
};
export default SettingCell;
