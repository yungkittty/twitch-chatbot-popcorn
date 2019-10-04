import React from "react";
import { faPlay, faPause, faCircle, faStop, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import DashboardContainer from "./components/controls-container";
import AppSectionTitle from "../../../../components/app-section-title";
import AppButton from "../../../../components/app-button";
import AppForm from "../../../../components/app-form";
import AppContext from "../../../../contexts/app-context";

const DashboardControls = props => {
  const {
    // eslint-disable-line
    watcherId,
    watcherStatus,
    setWatcherStatus,
    setWatcherMetrics
  } = React.useContext(AppContext);

  const watcherStatusRef = React.useRef();
  const watcherMetricsIntRef = React.useRef();
  const watcherMetricsSinceIntRef = React.useRef();

  const [watcherMetricsWords, setWatcherMetricsWords] = React.useState(3);
  const [watcherMetricsSince, setWatcherMetricsSince] = React.useState(0);
  const [watcherMetricsExpire, setWatcherMetricsExpire] = React.useState(30);
  const [watcherMetricsCount, setWatcherMetricsCount] = React.useState(3);

  watcherStatusRef.current = watcherStatus;

  const getMetricsSince = () => {
    if (watcherStatusRef.current)
      // eslint-disable-line
      setWatcherMetricsSince(watcherMetricsSince => watcherMetricsSince + 1);
  };

  const getWatcher = () => {
    axios
      .get(`/api/watchers/${watcherId}`)
      .then(response => {
        const {
          status,
          messagesWords: metricsWords,
          messagesAt,
          metricsSince = messagesAt ? Math.round((Date.now() - messagesAt) / 1000) : 0
        } = response.data;
        setWatcherStatus(status);
        setWatcherMetricsWords(metricsWords);
        setWatcherMetricsSince(metricsSince);
        if (!watcherStatusRef.current) return;
        watcherMetricsIntRef.current = setInterval(getMetrics, 500);
        watcherMetricsSinceIntRef.current = setInterval(getMetricsSince, 1000);
      })
      .catch(() => {});
  };

  const getMetrics = () => {
    axios
      .get(`/api/watchers/${watcherId}/metrics?expire=${watcherMetricsExpire}&count=${watcherMetricsCount}`)
      .then(response => setWatcherMetrics(response.data))
      .catch(() => {});
  };

  const onButtonPlayClick = () => {
    setWatcherStatus(true);
    axios
      .patch(`/api/watchers/${watcherId}`, { status: true })
      .then(() => (watcherMetricsIntRef.current = setInterval(getMetrics, 500)))
      .then(() => (watcherMetricsSinceIntRef.current = setInterval(getMetricsSince, 1000)))
      .catch(() => {});
  };

  const onButtonPauseClick = () => {
    setWatcherStatus(false);
    axios
      .patch(`/api/watchers/${watcherId}`, { status: false })
      .then(() => clearInterval(watcherMetricsIntRef.current))
      .then(() => clearInterval(watcherMetricsSinceIntRef.current))
      .catch(() => {});
  };

  const onButtonStopClick = () => {
    setWatcherMetrics({});
    setWatcherMetricsSince(0);
    axios
      // eslint-disable-line
      .delete(`/api/watchers/${watcherId}/metrics`)
      .catch(() => {});
  };

  const onInputMetricsWordsChange = event => {
    const metricsWords = event.target.value;
    setWatcherMetricsWords(metricsWords);
    axios
      // eslint-disable-line
      .patch(`/api/watchers/${watcherId}`, { messagesWords: metricsWords })
      .catch(() => {});
  };

  React.useEffect(getWatcher, []);

  const watcherSession = watcherMetricsSince || watcherStatus;

  return (
    <DashboardContainer {...props}>
      <AppSectionTitle>
        {/* eslint-disable-line */}
        CONTRÔLES
      </AppSectionTitle>
      <AppButton
        // eslint-disable-line
        buttonIcon={!watcherSession ? faPlay : watcherStatus ? faCircle : faPause}
        buttonTitle={!watcherSession ? "Lire le chat" : watcherStatus ? `Lecture depuis ${watcherMetricsSince}s` : "Lecture en pause"}
        buttonColor="#00caff"
        buttonDisabled={watcherSession}
        onButtonClick={onButtonPlayClick}
      />
      <AppButton
        // eslint-disable-line
        buttonIcon={watcherStatus ? faStop : faPlay}
        buttonTitle={watcherStatus ? "Arrêter à ces résultats" : "Reprendre la lecture"}
        buttonColor="#00caff"
        buttonDisabled={!watcherSession}
        onButtonClick={watcherStatus ? onButtonPauseClick : onButtonPlayClick}
      />
      <AppButton
        // eslint-disable-line
        style={{ marginBottom: 50 }}
        buttonIcon={faSyncAlt}
        buttonTitle="Réinitialiser la session"
        buttonColor="#ff485d"
        buttonDisabled={!watcherSession}
        onButtonClick={onButtonStopClick}
      />
      <AppSectionTitle>
        {/* eslint-disable-line */}
        PARAMÈTRES DE LECTURE
      </AppSectionTitle>
      <AppForm
        // eslint-disable-line
        formType="number"
        formTitle="Nombre de mots maximum d'un message :"
        formValue={watcherMetricsWords}
        formMin={1}
        formDisabled={watcherSession}
        onFormValueChange={onInputMetricsWordsChange}
      />
      <AppForm
        // eslint-disable-line
        formType="number"
        formTitle="Durée d'interprétation des messages (s) :"
        formValue={watcherMetricsExpire}
        formMin={1}
        formDisabled={watcherSession}
        onFormValueChange={event => setWatcherMetricsExpire(event.target.value)}
      />
      <AppForm
        // eslint-disable-line
        formType="number"
        formTitle="Nombre de lignes du classement :"
        formValue={watcherMetricsCount}
        formMin={1}
        formDisabled={watcherSession}
        onFormValueChange={event => setWatcherMetricsCount(event.target.value)}
      />
    </DashboardContainer>
  );
};

export default DashboardControls;
