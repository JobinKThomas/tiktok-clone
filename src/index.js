import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
  
import "semantic-ui-css/semantic.min.css";
import Login from "./login";
import Register from "./register";
import Addvideo from "./addvideo";
import Ginto from "./kocha"


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/addvideo" component={Addvideo}/>
        <Route path="/" component={App}/>
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
