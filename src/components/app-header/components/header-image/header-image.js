import styled from "styled-components";

import headerImage from "../../assets/header-image.png";

const HeaderImage = styled.img.attrs(() => ({ src: headerImage }))`
  width: 55px;
  height: 55px;
`;

export default HeaderImage;
