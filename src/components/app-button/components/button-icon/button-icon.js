import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ButtonIcon = styled(FontAwesomeIcon).attrs(props => {
  const { buttonIcon, buttonColor, buttonDisabled } = props;
  return { icon: buttonIcon, color: buttonDisabled ? buttonColor : "#ffffff" };
})`
  margin-right: 10px;
`;

export default ButtonIcon;
