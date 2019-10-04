import styled from "styled-components";

const OccurrenceTitle = styled.text`
  ${props => {
    const { itemStatus } = props;
    const titleColor = itemStatus ? "#00caff" : "#ffffff";
    return `
      margin-left: 20px;
      font-size: 18px;
      font-style: italic;
      font-weight: bold;
      color: ${titleColor};
    `;
  }}
`;

export default OccurrenceTitle;
