import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface SettingOption {
  id: string;
  iconBackgroundColor: string;
  iconColor: string;
  settingIcon: IconProp;
  description: string;
}

const settingOptions: Array<SettingOption> = [
  {
    id: "1",
    iconBackgroundColor: "#007acc",
    iconColor: "#40a9f3",
    settingIcon: "save",
    description: "Save Messages"
  },
  {
    id: "2",
    iconBackgroundColor: "#5bc266",
    iconColor: "green",
    settingIcon: "phone-alt",
    description: "Recent Calls"
  },
  {
    id: "3",
    iconBackgroundColor: "#e67e22",
    iconColor: "green",
    settingIcon: "laptop",
    description: "Devices"
  },
  {
    id: "4",
    iconBackgroundColor: "#64d2ff",
    iconColor: "green",
    settingIcon: "folder-open",
    description: "Chat Folders"
  }
];

const personalizations: Array<SettingOption> = [
  {
    id: "1",
    iconBackgroundColor: "#ff0000",
    iconColor: "#40a9f3",
    settingIcon: "bell",
    description: "Notifiocation and Sounds"
  },
  {
    id: "2",
    iconBackgroundColor: "#777777",
    iconColor: "green",
    settingIcon: "lock",
    description: "Privacity and Security"
  },
  {
    id: "3",
    iconBackgroundColor: "#5bc266",
    iconColor: "green",
    settingIcon: "database",
    description: "Data and Storage"
  },
  {
    id: "4",
    iconBackgroundColor: "#64d2ff",
    iconColor: "green",
    settingIcon: "paint-brush",
    description: "Appearence"
  },
  {
    id: "5",
    iconBackgroundColor: "#ce76f6",
    iconColor: "green",
    settingIcon: "globe",
    description: "Language"
  },
  {
    id: "6",
    iconBackgroundColor: "#e67e22",
    iconColor: "green",
    settingIcon: "sticky-note",
    description: "Stickers"
  }
];

const extras: Array<SettingOption> = [
  {
    id: "1",
    iconBackgroundColor: "#777777",
    iconColor: "#40a9f3",
    settingIcon: "clock",
    description: "Apple Watch"
  },
  {
    id: "2",
    iconBackgroundColor: "#e67e22",
    iconColor: "green",
    settingIcon: "comment-dots",
    description: "Ask a Question"
  },
  {
    id: "2",
    iconBackgroundColor: "#64d2ff",
    iconColor: "green",
    settingIcon: "question-circle",
    description: "Woofgram FAQ"
  }
];

export { settingOptions, personalizations, extras };
