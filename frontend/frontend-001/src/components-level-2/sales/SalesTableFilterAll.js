import React, { useState } from "react";
import { useHistory } from "react-router";

import SalesTableFilterGeneric from "./SalesTableFilterGeneric";
import { handleDeleteRequest } from "../../actions/HandleManager";
import enumPaths from "./../../models/enumPaths";
import i18n from "../../i18n/i18n";
import enumSaleStatus from "./../../models/sales/enumSaleStatus";
import CommonLoading from "../../components-level-1/CommonLoading";
import enumSaleTableViewType from "./../../models/sales/enumSaleTableViewType";

function SalesTableFilterAll () {
  const tableTitle = i18n.saleTable.titleSelectionToEditDelete;
  const history = useHistory();
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  function handleAfterDelete (responseData) {
    setIsRequestInProgress(false);
  }

  function handleDelete (data) {
    setIsRequestInProgress(true);
    handleDeleteRequest(`sales/${data.id}`, handleAfterDelete, handleAfterDelete);
  }

  function handleDetails (saleData) {
    history.push({
      pathname: enumPaths.SALES_REGISTRATION_STEP_TWO,
      state: {
        data: { saleData, saleTableViewType: enumSaleTableViewType.FOR_SELLER }
      }
    });
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "success",
      handleCustom: handleDetails,
      text: i18n.commonTable.detailsButton
    },
    {
      variant: "danger",
      handleCustom: handleDelete,
      text: i18n.commonTable.deleteButton
    }
  ];

  if (isRequestInProgress) {
    return <CommonLoading />;
  }

  return (
    <SalesTableFilterGeneric
      tableArrayCustomRowButtons={ tableArrayCustomRowButtons}
      tableSaleStatusType={ enumSaleStatus.DONE}
      tableTitle={tableTitle }
    >
    </SalesTableFilterGeneric>
  );
}

export default SalesTableFilterAll;
