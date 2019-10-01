import React from "react";
import ButtonContainer from "./components/button-container";
import ButtonIcon from "./components/button-icon";
import ButtonTitle from "./components/button-title";

const AppButton = ({
  // eslint-disable-line
  buttonTitle,
  buttonIcon,
  buttonColor,
  buttonDisabled,
  ...others
}) => (
  <ButtonContainer
    // eslint-disable-line
    {...others}
    buttonColor={buttonColor}
    buttonDisabled={buttonDisabled}
  >
    <ButtonIcon
      // eslint-disable-line
      buttonIcon={buttonIcon}
      buttonColor={buttonColor}
      buttonDisabled={buttonDisabled}
      size="lg"
    />
    <ButtonTitle
      // eslint-disable-line
      buttonColor={buttonColor}
      buttonDisabled={buttonDisabled}
    >
      {/* eslint-disable-line */}
      {buttonTitle}
    </ButtonTitle>
  </ButtonContainer>
);

export default AppButton;
