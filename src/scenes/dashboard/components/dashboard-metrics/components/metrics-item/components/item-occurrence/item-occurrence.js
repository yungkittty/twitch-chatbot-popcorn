import React from "react";
import OccurrenceContainer from "./components/occurrence-container";
import OccurrenceOverlay from "./components/occurrence-overlay";
import OccurrenceTitle from "./components/occurrence-title";
import OccurrenceSubtitle from "./components/occurrence-subtitle";

const ItemOccurrence = ({
  // eslint-disable-line
  itemStatus,
  itemData,
  itemOccurrences,
  itemOccurrencesSum
}) => {
  const itemOccurrencesRate = Math.round((100 * itemOccurrences) / itemOccurrencesSum);
  return (
    <OccurrenceContainer>
      <OccurrenceOverlay
        // eslint-disable-line
        itemStatus={itemStatus}
        itemOccurrencesRate={itemOccurrencesRate}
      />
      <OccurrenceTitle itemStatus={itemStatus}>
        {/* eslint-disable-line */}
        {`"${itemData}"`}
      </OccurrenceTitle>
      <OccurrenceSubtitle>
        {/* eslint-disable-line */}
        {`${itemOccurrencesRate}%`}
      </OccurrenceSubtitle>
      <OccurrenceSubtitle style={{ opacity: 0.5 }}>
        {/* eslint-disable-line */}
        {`${itemOccurrences} msgs.`}
      </OccurrenceSubtitle>
    </OccurrenceContainer>
  );
};

export default ItemOccurrence;
