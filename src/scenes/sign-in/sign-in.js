import React from "react";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import SignInContainer from "./components/sign-in-container";
import SignInForm from "./components/sign-in-form";
import SignInButton from "./components/sign-in-button";
import AppContext from "../../contexts/app-context";

const SignIn = () => {
  const history = useHistory();

  const { setWatcherId } = React.useContext(AppContext);

  const [formValue, setFormValue] = React.useState("");

  const onButtonClick = () => {
    require("axios")
      // eslint-disable-line
      .post(`/api/watchers/${formValue}`)
      .then(response => {
        setWatcherId(response.data.watcherId);
        history.push("/");
      })
      .catch(() => {});
  };

  return (
    <SignInContainer>
      <div className="pure-u-sm-3-4 pure-u-md-1-2 pure-u-lg-1-4">
        <SignInForm
          // eslint-disable-line
          formType="text"
          formTitle="Saisir une clé d'accès (UUID) :"
          formValue={formValue}
          onFormValueChange={event => setFormValue(event.target.value)}
        />
        <SignInButton
          // eslint-disable-line
          buttonIcon={faSignInAlt}
          buttonTitle="Connection"
          buttonColor="#00CAFF"
          onButtonClick={onButtonClick}
        />
      </div>
    </SignInContainer>
  );
};

export default SignIn;
