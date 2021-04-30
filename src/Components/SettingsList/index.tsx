import "./styles.css";
import SettingCell from "../SettingCell";
import UserInfo from "../UserInfo";
import {
  SettingOption,
  settingOptions,
  personalizations,
  extras
} from "./settingOptions";
import React from "react";

const SettingsList = (props) => {
  const numerosImpares = [1, 3, 5, 7, 9];
  const numerosImparesEspaneados = numerosImpares.map((numero: number) => (
    <h1>{numero}</h1>
  ));
  // numerosImparesAlDoble = [<span>1</span>, <span>3</span>, <span>5</span>, <span>7</span>, <span>9</span>]
  console.log(numerosImparesEspaneados);

  const settingsCells = settingOptions.map((option: SettingOption) => (
    <SettingCell key={option.id} {...option} />
  ));

  const settingsPersonalizations = personalizations.map(
    (option: SettingOption) => <SettingCell key={option.id} {...option} />
  );

  const settingsExtras = extras.map((option: SettingOption) => (
    <SettingCell key={option.id} {...option} />
  ));

  return (
    <div>
      <UserInfo />
      {settingsCells}
      <div id="spaceBetween"></div>
      {settingsPersonalizations}
      <div id="spaceBetween"></div>
      {settingsExtras}
    </div>
  );
};
export default SettingsList;
