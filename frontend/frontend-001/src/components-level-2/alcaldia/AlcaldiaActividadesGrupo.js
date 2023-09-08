import React, { useState } from "react";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card/";
import CommonLoading from "../../components-level-1/CommonLoading";
import i18n from "../../i18n/i18n";
import AlcaldiaActividadesTableAddToGroup from "./AlcaldiaActividadesTableAddToGroup";
import AlcaldiaActividadesTableDeleteToGroup from "./AlcaldiaActividadesTableDeleteToGroup";

function AlcaldiaActividadesGrupo () {
  const history = useHistory();
  const isEditDefaultValue = history && history.location && history.location.state;
  const [isEdit] = useState(isEditDefaultValue);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  return (
    <div>
      <Card.Header as="h2">{`${i18n.alcaldiaActividadesTable.titleGroup} ${isEdit.data.name}`}</Card.Header>
      {isRequestInProgress
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
            >
            </AlcaldiaActividadesTableDeleteToGroup>
          </div>
        </>
      }
    </div>
  );
}

export default AlcaldiaActividadesGrupo;
