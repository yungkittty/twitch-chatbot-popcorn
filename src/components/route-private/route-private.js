import React from "react";
import { Route, Redirect } from "react-router-dom";
import AppContext from "../../contexts/app-context";

const RoutePrivate = ({
  // eslint-disable-line
  component: Component,
  ...others
}) => {
  const { watcherId } = React.useContext(AppContext);
  return (
    <Route
      // eslint-disable-line
      {...others}
      render={props =>
        // eslint-disable-lin
        watcherId ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    />
  );
};

export default RoutePrivate;
