import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faSave,
  faChevronRight,
  faLaptop,
  faPhoneAlt,
  faFolderOpen,
  faBell,
  faLock,
  faDatabase,
  faPaintBrush,
  faGlobe,
  faStickyNote,
  faClock,
  faCommentDots,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import App from "./App";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faSave,
  faChevronRight,
  faLaptop,
  faPhoneAlt,
  faFolderOpen,
  faBell,
  faLock,
  faDatabase,
  faPaintBrush,
  faGlobe,
  faStickyNote,
  faClock,
  faCommentDots,
  faQuestionCircle
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
