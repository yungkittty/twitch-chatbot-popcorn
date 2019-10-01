import _ from "lodash";
import React from "react";
import MetricsContainer from "./components/metrics-container";
import AppSectionTitle from "../../../../components/app-section-title";
import MetricsItem from "./components/metrics-item";
import AppContext from "../../../../contexts/app-context";

const DashboardMetrics = props => {
  const { watcherMetrics } = React.useContext(AppContext);

  const { metricsOccurencesSum: itemOccurrencesSum } = watcherMetrics;

  return (
    <MetricsContainer {...props}>
      <AppSectionTitle>
        {/* eslint-disable-line */}
        SESSION COURANTE
      </AppSectionTitle>
      {_.map(watcherMetrics.metrics, (item, itemRank) => {
        const { data: itemData, occurrences: itemOccurrences } = item;
        return (
          <MetricsItem
            // eslint-disable-line
            itemRank={itemRank + 1}
            itemData={itemData}
            itemOccurrences={itemOccurrences}
            itemOccurrencesSum={itemOccurrencesSum}
          />
        );
      })}
    </MetricsContainer>
  );
};

export default DashboardMetrics;
