import React from "react";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { withRouter } from "react-router-dom";
import SignInContainer from "./components/sign-in-container";
import SignInForm from "./components/sign-in-form";
import SignInButton from "./components/sign-in-button";
import AppContext from "../../contexts/app-context";

const SignIn = props => {
  const { history } = props;

  const { setWatcherId } = React.useContext(AppContext);

  const [userId, setUserId] = React.useState("");

  const onButtonClick = () => {
    axios
      .post(`/api/watchers/${userId}`)
      .then(reponse => setWatcherId(reponse.data.watcherId))
      .then(() => history.push("/"))
      .catch(() => {});
  };

  return (
    <SignInContainer>
      <div className="pure-u-sm-3-4 pure-u-md-1-2 pure-u-lg-1-4">
        <SignInForm
          // eslint-disable-line
          formType="text"
          formTitle="Saisir une clé d'accès (UUID) :"
          formValue={userId}
          onFormValueChange={event => setUserId(event.target.value)}
        />
        <SignInButton
          // eslint-disable-line
          buttonIcon={faSignInAlt}
          buttonTitle="Connexion"
          buttonColor="#00caff"
          onButtonClick={onButtonClick}
        />
      </div>
    </SignInContainer>
  );
};

export default withRouter(SignIn);
