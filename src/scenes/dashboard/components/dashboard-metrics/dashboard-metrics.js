import _ from "lodash";
import React from "react";
import MetricsContainer from "./components/metrics-container";
import AppSectionTitle from "../../../../components/app-section-title";
import MetricsSubtitle from "./components/metrics-subtitle";
import MetricsItem from "./components/metrics-item";
import MetricsPlaceholder from "./components/metrics-placeholder";
import AppContext from "../../../../contexts/app-context";

const DashboardMetrics = props => {
  const { watcherStatus: itemStatus, watcherMetrics } = React.useContext(AppContext);

  const { metricsOccurencesSum: itemOccurrencesSum } = watcherMetrics;

  return (
    <MetricsContainer {...props}>
      <AppSectionTitle>
        {/* eslint-disable-line */}
        SESSION COURANTE
      </AppSectionTitle>
      {!_.isEmpty(watcherMetrics) ? (
        <React.Fragment>
          <MetricsSubtitle>
            {/* eslint-disable-line */}
            {`${itemStatus ? "Résultat(s) en pause - " : ""}${itemOccurrencesSum} message(s) analysé(s)`}
          </MetricsSubtitle>
          {_.map(watcherMetrics.metrics, (item, itemRank) => {
            const { data: itemData, occurrences: itemOccurrences } = item;
            return (
              <MetricsItem
                // eslint-disable-line
                itemRank={itemRank + 1}
                itemStatus={itemStatus}
                itemData={itemData}
                itemOccurrences={itemOccurrences}
                itemOccurrencesSum={itemOccurrencesSum}
              />
            );
          })}
        </React.Fragment>
      ) : (
        <MetricsPlaceholder>
          {/* eslint-disable-line */}
          Pour afficher les données, lancer la lecture du chat.
        </MetricsPlaceholder>
      )}
    </MetricsContainer>
  );
};

export default DashboardMetrics;
