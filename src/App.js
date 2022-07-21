import React from 'react';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from './SwipeButtons';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen"

import './App.css';
import { Home } from '@material-ui/icons';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton = "/chat"/>
            <ChatScreen/>
          </Route>
          <Route path="/chat">
            <Header backButton = "/"/>
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards/>
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;



{ /* Tinder Cards */ }
{ /* Buttons below Tinder cards */ }

{ /* Chats screen */ }
{ /* Individual chat screen */ }