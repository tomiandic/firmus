import React from "react";
import Landing from "./components/Views/Landing";
import Success from "./components/Views/Success";
import FormContainer from "./components/Views/FormContainer";
import CssBaseline from "@material-ui/core/CssBaseline";
import DesktopForm from "./components/Views/DesktopForm";
import {MuiThemeProvider} from "@material-ui/core/styles";

import theme from "./theme";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/form">
              <DesktopForm />
            </Route>
            <Route exact path="/form/0">
              <FormContainer index={0} />
            </Route>
            <Route path="/form/1">
              <FormContainer index={1} />
            </Route>
            <Route path="/form/2">
              <FormContainer index={2} />
            </Route>
            <Route path="/form/3">
              <FormContainer index={3} />
            </Route>
            <Route path="/form/4">
              <FormContainer index={4} />
            </Route> 
            <Route path="/form/5">
              <FormContainer index={5} />
            </Route> 
            <Route path="/success">
              <Success />
            </Route> 
          </Switch>
        </Router>
      </MuiThemeProvider>
  );
}

export default App;
