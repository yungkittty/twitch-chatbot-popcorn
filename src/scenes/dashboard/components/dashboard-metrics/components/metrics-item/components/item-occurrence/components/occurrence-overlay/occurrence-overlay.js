import styled from "styled-components";

const OccurrenceOverlay = styled.div`
  ${props => {
    const { itemStatus, itemOccurrencesRate: overlayWidth } = props;
    const overlayBackgroundColor = itemStatus ? "#00caff" : "#bec5c9";
    return `
      display: flex;
      flex-direction: row;
      align-items: center;
      width: ${overlayWidth}%;
      height: 100%;
      background-color: ${overlayBackgroundColor};
    `;
  }}
`;

export default OccurrenceOverlay;
