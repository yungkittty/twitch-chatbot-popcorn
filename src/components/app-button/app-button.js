import React from "react";
import ButtonContainer from "./components/button-container";
import ButtonIcon from "./components/button-icon";
import ButtonTitle from "./components/button-title";

const AppButton = ({
  // eslint-disable-line
  buttonIcon,
  buttonTitle,
  buttonColor,
  buttonDisabled,
  onButtonClick,
  ...others
}) => (
  <ButtonContainer
    // eslint-disable-line
    {...others}
    buttonColor={buttonColor}
    buttonDisabled={buttonDisabled}
    onClick={onButtonClick}
  >
    <ButtonIcon
      // eslint-disable-line
      buttonIcon={buttonIcon}
      buttonColor={buttonColor}
      buttonDisabled={buttonDisabled}
      size="sm"
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
