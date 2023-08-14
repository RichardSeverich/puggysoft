import React, { useState } from "react";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card/";
import CommonLoading from "../../components-level-1/CommonLoading";
import i18n from "../../i18n/i18n";
import AlcaldiaRecursosMunicipalesTableAddToGroup from "./AlcaldiaRecursosMunicipalesTableAddToGroup";
import AlcaldiaRecursosMunicipalesTableDeleteToGroup from "./AlcaldiaRecursosMunicipalesTableDeleteToGroup";

function AlcaldiaRecursosMunicipalesByGrupoStepTwo () {
  const history = useHistory();
  const isEditDefaultValue = history && history.location && history.location.state;
  const [isEdit] = useState(isEditDefaultValue);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  return (
    <div>
      <Card.Header as="h2">{`${i18n.alcaldiaRecursosMunicipalesTable.rubroSelect} ${isEdit.data.name}`}</Card.Header>
      {isRequestInProgress
        ? <CommonLoading></CommonLoading>
        : <>
          <div className="puggysoft-two-divs-side-by-side-child">
            <AlcaldiaRecursosMunicipalesTableAddToGroup
              idPadre={isEdit.data.id}
              setIsRequestInProgress={setIsRequestInProgress}
            >
            </AlcaldiaRecursosMunicipalesTableAddToGroup>
          </div>
          <div className="puggysoft-two-divs-side-by-side-child">
            <AlcaldiaRecursosMunicipalesTableDeleteToGroup
              idPadre={isEdit.data.id}
              setIsRequestInProgress={setIsRequestInProgress}
            >
            </AlcaldiaRecursosMunicipalesTableDeleteToGroup>
          </div>
        </>
      }
    </div>
  );
}

export default AlcaldiaRecursosMunicipalesByGrupoStepTwo;
