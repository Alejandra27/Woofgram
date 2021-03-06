import "./styles.css";
import TabBar from "./Components/TabBar";
import React from "react";
import ChatList from "./Components/ChatList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactsList from "./Components/ContactsList";
import CallList from "./Components/CallList";
import SettingsList from "./Components/SettingsList";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TabBar />
        <Switch>
          <Route path="/contacts">
            <ContactsList />
          </Route>
          <Route path="/chats">
            <ChatList />
          </Route>
          <Route path="/calls">
            <CallList />
          </Route>
          <Route path="/settings">
            <SettingsList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
