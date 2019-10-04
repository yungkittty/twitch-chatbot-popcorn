import React from "react";
import ItemContainer from "./components/item-container";
import ItemRank from "./components/item-rank";
import ItemOccurrence from "./components/item-occurrence";

const MetricsItem = ({
  // eslint-disable-line
  itemRank,
  itemStatus,
  itemData,
  itemOccurrences,
  itemOccurrencesSum
}) => (
  <ItemContainer>
    <ItemRank itemRank={itemRank} />
    <ItemOccurrence
      // eslint-disable-line
      itemStatus={itemStatus}
      itemData={itemData}
      itemOccurrences={itemOccurrences}
      itemOccurrencesSum={itemOccurrencesSum}
    />
  </ItemContainer>
);

export default MetricsItem;
