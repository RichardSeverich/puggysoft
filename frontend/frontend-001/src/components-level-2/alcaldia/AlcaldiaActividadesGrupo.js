import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card/";
import CommonLoading from "../../components-level-1/CommonLoading";
import i18n from "../../i18n/i18n";
import AlcaldiaActividadesTableAddToGroup from "./AlcaldiaActividadesTableAddToGroup";
import AlcaldiaActividadesTableDeleteToGroup from "./AlcaldiaActividadesTableDeleteToGroup";
import { handleGetRequest } from "../../actions/HandleManager";

function AlcaldiaActividadesGrupo () {
  const history = useHistory();
  const isEditDefaultValue = history && history.location && history.location.state;
  const [isEdit] = useState(isEditDefaultValue);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  const [timbre, setTimbre] = useState(null);
  const [folder, setFolder] = useState(null);
  const [isRequestInProgressTimbres, setIsRequestInProgressTimbres] = useState(false);
  const [isRequestInProgressFolders, setIsRequestInProgressFolders] = useState(false);

  const handleAfterGetTimbreSuccess = (timbre) => {
    setTimbre(timbre);
    setIsRequestInProgressTimbres(false);
  };

  const handleAfterGetFolderSuccess = (folder) => {
    setFolder(folder);
    setIsRequestInProgressFolders(false);
  };

  useEffect(() => {
    if (isEdit.data.idTimbre) {
      setIsRequestInProgressTimbres(true);
      handleGetRequest(`alcaldia-recursos-municipales/${isEdit.data.idTimbre}`, handleAfterGetTimbreSuccess);
    }
    if (isEdit.data.idFolder) {
      setIsRequestInProgressFolders(true);
      handleGetRequest(`alcaldia-recursos-municipales/${isEdit.data.idFolder}`, handleAfterGetFolderSuccess);
    }
  }, []);

  return (
    <div>
      <Card.Header as="h2">{`${i18n.alcaldiaActividadesTable.titleGroup} ${isEdit.data.name}`}</Card.Header>
      {isRequestInProgress || isRequestInProgressTimbres || isRequestInProgressFolders
        ? <CommonLoading></CommonLoading>
        : <>
          <div className="puggysoft-two-divs-side-by-side-child">
            <AlcaldiaActividadesTableAddToGroup
              idActividad={isEdit.data.id}
              setIsRequestInProgress={setIsRequestInProgress}
            >
            </AlcaldiaActividadesTableAddToGroup>
          </div>
          <div className="puggysoft-two-divs-side-by-side-child">
            <AlcaldiaActividadesTableDeleteToGroup
              idActividad={isEdit.data.id}
              setIsRequestInProgress={setIsRequestInProgress}
              timbre={timbre}
              folder={folder}
            >
            </AlcaldiaActividadesTableDeleteToGroup>
          </div>
        </>
      }
    </div>
  );
}

export default AlcaldiaActividadesGrupo;
