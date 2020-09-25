import Container from "@material-ui/core/Container";
import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "../Join/Join";
import Chat from "../Chat/Chat";

import "../../theme/index.scss";

export default function AppWrapper() {
  return (
    <Container maxWidth="xl">
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </Router>
    </Container>
  );
}
