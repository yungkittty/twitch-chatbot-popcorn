import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppContext from "./contexts/app-context";
import AppContainer from "./components/app-container";
// import AppHeader from "./components/app-header";
import RoutePrivate from "./components/route-private";
import SignIn from "./scenes/sign-in";
import Dashboard from "./scenes/dashboard";

const App = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  return (
    <AppContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      <AppContainer>
        {/* <AppHeader /> */}
        <Router>
          <RoutePrivate exact path="/" component={Dashboard} />
          <Route exact path="/sign-in" component={SignIn} />
        </Router>
      </AppContainer>
    </AppContext.Provider>
  );
};

export default App;
