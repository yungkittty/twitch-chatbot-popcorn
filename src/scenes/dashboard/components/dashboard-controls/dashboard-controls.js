import axios from "axios";
import React from "react";
import { faPlay, faPause, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import DashboardContainer from "./components/controls-container";
import AppSectionTitle from "../../../../components/app-section-title";
import AppButton from "../../../../components/app-button";
import AppForm from "../../../../components/app-form";
import AppContext from "../../../../contexts/app-context";

const DashboardControls = props => {
  const watcherRef = React.useRef();

  const [watcherExpire, setWatcherExpire] = React.useState(30);
  const [watcherCount, setWatcherCount] = React.useState(3);

  const {
    // eslint-disable-line
    watcherId,
    watcherStatus,
    setWatcherStatus,
    setWatcherMetrics
  } = React.useContext(AppContext);

  const onWatcher = () => {
    axios
      .get(`/api/watchers/${watcherId}/metrics?expire=${watcherExpire}&count=${watcherCount}`)
      .then(response => setWatcherMetrics(response.data))
      .catch(() => {});
  };

  const onButtonPlayClick = () => {
    axios
      .patch(`/api/watchers/${watcherId}`, { status: !watcherStatus })
      .then(reponse => {
        setWatcherStatus(reponse.data.status);
        if (!watcherStatus) {
          watcherRef.current = setInterval(onWatcher, 1000);
        } else {
          clearInterval(watcherRef.current);
        }
      })
      .catch(() => {});
  };

  const onButtonInitClick = () => {
    axios
      .delete(`/api/watchers/${watcherId}/messages`)
      .then(() => setWatcherMetrics({}))
      .catch(() => {});
  };

  return (
    <DashboardContainer {...props}>
      <AppSectionTitle>
        {/* eslint-disable-line */}
        CONTRÔLES
      </AppSectionTitle>
      <AppButton
        // eslint-disable-line
        buttonIcon={!watcherStatus ? faPlay : faPause}
        buttonTitle=""
        buttonColor="#00caff"
        onButtonClick={onButtonPlayClick}
      />
      <AppButton
        // eslint-disable-line
        style={{ marginBottom: 50 }}
        buttonIcon={faSyncAlt}
        buttonTitle=""
        buttonColor="#ff485d"
        buttonDisabled={watcherStatus}
        onButtonClick={onButtonInitClick}
      />
      <AppSectionTitle>
        {/* eslint-disable-line */}
        PARAMÈTRES DE LECTURE
      </AppSectionTitle>
      <AppForm
        // eslint-disable-line
        formType="number"
        formTitle="Durée d'interprétation des messages (en secondes) :"
        formValue={watcherExpire}
        formDisabled={watcherStatus}
        onFormValueChange={event => setWatcherExpire(event.target.value)}
      />
      <AppForm
        // eslint-disable-line
        formType="number"
        formTitle="Nombre de lignes du classement :"
        formValue={watcherCount}
        formDisabled={watcherStatus}
        onFormValueChange={event => setWatcherCount(event.target.value)}
      />
    </DashboardContainer>
  );
};

export default DashboardControls;
