import styled from "styled-components";

const ButtonContainer = styled.button.attrs(({ buttonDisabled }) => ({ disabled: buttonDisabled }))`
  ${props => {
    const { buttonColor, buttonDisabled } = props;
    const containerBorder = buttonDisabled ? `1px solid ${buttonColor}` : "unset";
    const containerBackgroundColor = buttonDisabled ? "transparent" : buttonColor;
    const containerBrightness = buttonDisabled ? "50%" : "100%";
    return `
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 40px;
      box-sizing: border-box;
      padding: 0px 10px;
      border: ${containerBorder};
      outline: none;
      background-color: ${containerBackgroundColor};
      filter: brightness(${containerBrightness});
    `;
  }}
`;

export default ButtonContainer;
