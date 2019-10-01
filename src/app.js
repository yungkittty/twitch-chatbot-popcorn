import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppContext from "./contexts/app-context";
import AppContainer from "./components/app-container";
import RoutePrivate from "./components/route-private";
import SignIn from "./scenes/sign-in";
import Dashboard from "./scenes/dashboard";
import configureAxios from "./configurations/axios";

configureAxios();

const App = () => {
  const [watcherId, setWatcherId] = React.useState("");
  const [watcherStatus, setWatcherStatus] = React.useState(false);
  const [watcherMetrics, setWatcherMetrics] = React.useState({});
  return (
    <AppContext.Provider
      value={{
        watcherId,
        watcherStatus,
        watcherMetrics,
        setWatcherId,
        setWatcherStatus,
        setWatcherMetrics
      }}
    >
      <AppContainer>
        <Router>
          <RoutePrivate exact path="/" component={Dashboard} />
          <Route exact path="/sign-in" component={SignIn} />
        </Router>
      </AppContainer>
    </AppContext.Provider>
  );
};

export default App;
