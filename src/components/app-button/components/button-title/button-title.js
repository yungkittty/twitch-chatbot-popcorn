import styled from "styled-components";

const ButtonTitle = styled.text`
  ${props => {
    const { buttonColor, buttonDisabled } = props;
    const titleColor = buttonDisabled ? buttonColor : "#ffffff";
    return `
      font-size: 14px;
      font-weight: 500;
      color: ${titleColor};
    `;
  }}
`;

export default ButtonTitle;
