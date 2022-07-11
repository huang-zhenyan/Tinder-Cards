import React from 'react';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from './SwipeButtons';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import { Home } from '@material-ui/icons';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/chat">
            <h1> I am the chat page </h1>
          </Route>
          <Route path="/">
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