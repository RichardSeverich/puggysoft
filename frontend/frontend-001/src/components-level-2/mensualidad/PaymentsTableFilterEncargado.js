import React, { useState } from "react";
import { useHistory } from "react-router";

import PagosTableFilterGeneric from "./generic/PagosTableFilterGeneric";
import { handleDeleteRequest } from "../../actions/HandleManager";
import enumPaths from "../../models/enumPaths";
import i18n from "../../i18n/i18n";
import enumSaleStatus from "../../models/sales/enumSaleStatus";
import CommonLoading from "../../components-level-1/CommonLoading";
import enumSaleTableViewType from "../../models/sales/enumSaleTableViewType";

function PaymentsTableFilterEncargado () {
  const tableTitle = i18n.pagoTable.titleSelectionToEditDelete;
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
    const estudianteSelected = {
      username: saleData.client,
    }
    const cursoSelected = {
      id: saleData.aux || "",
    }
    history.push({
      pathname: enumPaths.MENSUALIDAD_PAGO_STEP3_ENCARGADO,
      state: {
        data: {
          saleData,
          estudianteSelected,
          cursoSelected,
          saleTableViewType: enumSaleTableViewType.FOR_SELLER,
        }
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
    <PagosTableFilterGeneric
      tableArrayCustomRowButtons={ tableArrayCustomRowButtons}
      tableSaleStatusType={ enumSaleStatus.DONE}
      tableTitle={tableTitle }
    >
    </PagosTableFilterGeneric>
  );
}

export default PaymentsTableFilterEncargado;
