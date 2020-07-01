import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages";

function App() {
  return (
    <Switch>
      <Route path='/contact-form'>
        <div>Contact Form</div>
      </Route>
      <Route path='/'>
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
