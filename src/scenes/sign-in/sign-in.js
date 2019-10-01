import React from "react";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import SignInContainer from "./components/sign-in-container";
import SignInForm from "./components/sign-in-form";
import SignInButton from "./components/sign-in-button";

const SignIn = () => {
  const [formValue, setFormValue] = React.useState("");
  return (
    <SignInContainer>
      <div>
        <SignInForm
          // eslint-disable-line
          formType="text"
          formTitle="Saisir une clé d'accès (UUID) :"
          formValue={formValue}
          onFormValueChange={event => setFormValue(event.target.value)}
        />
        <SignInButton
          // eslint-disable-line
          buttonTitle="Connection"
          buttonIcon={faSignInAlt}
          buttonColor="#00CAFF"
        />
      </div>
    </SignInContainer>
  );
};

export default SignIn;
