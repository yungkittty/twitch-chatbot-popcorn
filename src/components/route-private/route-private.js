import React from "react";
import { Route, Redirect } from "react-router-dom";
import AppContext from "../../contexts/app-context";

const RoutePrivate = ({
  // eslint-disable-line
  component: Component,
  ...others
}) => {
  const { isSignedIn } = React.useContext(AppContext);
  return (
    <Route
      // eslint-disable-line
      {...others}
      render={props =>
        // eslint-disable-lin
        isSignedIn ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    />
  );
};

export default RoutePrivate;
