import React from "react";
import Landing from "./components/Views/Landing";
import Success from "./components/Views/Success";
import Login from "./components/Views/Profile/Login";
import FormContainer from "./components/Views/FormContainer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import initFacebookSdk from "./helpers/initFacebookSdk";
import UserInfoProvider from "./context/UserInfoProvider";
import UserCredentialsProvider from "./context/UserCredentialsProvider";
import AvailabilityProvider from "./context/AvailabilityProvider";
import LanguagesProvider from "./context/LanguagesProvider";
import JobsProvider from "./context/JobsProvider";

import theme from "./theme";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/* initFacebookSdk();*/

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/registracija">
            <JobsProvider>
              <LanguagesProvider>
                <AvailabilityProvider>
                  <UserCredentialsProvider>
                    <UserInfoProvider>
                      <FormContainer />
                    </UserInfoProvider>
                  </UserCredentialsProvider>
                </AvailabilityProvider>
              </LanguagesProvider>
            </JobsProvider>
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
