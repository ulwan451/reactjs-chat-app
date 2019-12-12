import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Login from "../container/Login";
import Home from "../container//Home";
import Register from "../container/Resgister";
import Landing from "../components/Landing";

export default function Routes() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
      </Router>
    </div>
  );
}
