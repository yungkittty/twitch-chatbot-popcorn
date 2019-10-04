import styled from "styled-components";

const FormInput = styled.input`
  ${props => {
    const { disabled: formDisabled } = props;
    const inputBrightness = formDisabled ? "50%" : "100%";
    return `
      width: 100%;
      height: 40px;
      min-height: 40px;
      box-sizing: border-box;
      padding: 0px 10px;
      border: 1px solid #ffffff;
      outline: none;
      font-size: 14px;
      font-weight: 500;
      color: #ffffff;
      background-color: transparent;  
      filter: brightness(${inputBrightness});
    `;
  }}
`;

export default FormInput;
