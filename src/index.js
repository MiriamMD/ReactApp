import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/style.css";

//Components
import StorePicker from "./components/StorePicker";
import App from "./components/App";
import NoMatch from './components/NoMatch'

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NoMatch}/>
      </Switch>
    </BrowserRouter>
  );
};


render(<Root />, document.querySelector("#main"));
