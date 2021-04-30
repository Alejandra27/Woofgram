import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SettingCellProps {
  key: string;
  iconBackgroundColor: string;
  settingIcon: IconProp;
  description: string;
}

const SettingCell = (props: SettingCellProps) => {
  return (
    <div className="settingCell">
      <div className="settingIconContainer">
        <div
          className="settingIcon"
          style={{ backgroundColor: props.iconBackgroundColor }}
        >
          <FontAwesomeIcon
            icon={props.settingIcon}
            color="#fff"
            className="settingGlyph"
          />
        </div>
      </div>
      <div className="descriptionContainer">
        <span className="description">{props.description}</span>
      </div>
      <div className="nextPageContainer">
        <FontAwesomeIcon
          icon="chevron-right"
          color="#777777"
          className="settingGlyph"
        />
      </div>
    </div>
  );
};
export default SettingCell;
