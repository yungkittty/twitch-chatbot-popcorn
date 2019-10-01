import styled from "styled-components";

const OccurrenceOverlay = styled.div`
  ${props => {
    const { itemOccurrencesRate: overlayWidth } = props;
    return `
      display: flex;
      flex-direction: row;
      align-items: center;
      width: ${overlayWidth}%;
      height: 100%;
      background-color: #00CAFF;
    `;
  }}
`;

export default OccurrenceOverlay;
