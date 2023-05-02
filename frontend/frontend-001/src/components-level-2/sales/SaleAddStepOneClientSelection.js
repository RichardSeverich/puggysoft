import React, { useState } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";

import UserTableFilterGenericByRoleReduced from "./../generic/UserTableFilterGenericByRoleReduced";
import enumRoles from "./../../models/users/enumRoles";
import enumSaleStatus from "./../../models/sales/enumSaleStatus";
import { handleAddRequest, handleGetRequest } from "../../actions/HandleManager";
import enumPaths from "./../../models/enumPaths";
import i18n from "../../i18n/i18n";
import CommonLoading from "../../components-level-1/CommonLoading";
import enumSaleTableViewType from "../../models/sales/enumSaleTableViewType";

function SaleAddStepOneClientSelection ({
  saleTableViewType
}) {
  const tableTitle = i18n.clientTable.titleSelectionToSales;
  const roleName = enumRoles.SALES_CLIENT;
  const history = useHistory();
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  function handleSelection (clientData) {
    setIsRequestInProgress(true);
    const username = window.sessionStorage.getItem("username");
    const tenant = window.sessionStorage.getItem("tenant");
    let saleStatus = enumSaleStatus.DONE;
    if (saleTableViewType && saleTableViewType === enumSaleTableViewType.FOR_CASHIER) {
      saleStatus = enumSaleStatus.TODO;
    }
    const bodySale = {
      client: clientData.username,
      status: saleStatus,
      createdBy: username,
      updatedBy: username,
      tenant
    };
    function handleAfterCreateSale (saleId) {
      const saleData = bodySale;
      saleData.id = saleId;
      function handleGetNewSale (saleDataFromRequest) {
        saleData.creationDate = saleDataFromRequest.creationDate;
        history.push({
          pathname: enumPaths.SALES_REGISTRATION_STEP_TWO,
          state: {
            data: { saleData, saleTableViewType }
          }
        });
      }
      handleGetRequest(`sales/${saleId}`, handleGetNewSale);
    }
    handleAddRequest("sales/", bodySale, handleAfterCreateSale, false);
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "success",
      handleCustom: handleSelection,
      text: i18n.commonTable.selectButton
    }
  ];

  if (isRequestInProgress) {
    return <CommonLoading />;
  }

  return (
    <UserTableFilterGenericByRoleReduced
      roleName={roleName}
      tableTitle={tableTitle}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
    >
    </UserTableFilterGenericByRoleReduced>
  );
}

export default SaleAddStepOneClientSelection;

SaleAddStepOneClientSelection.propTypes = {
  saleTableViewType: PropTypes.oneOf([
    enumSaleTableViewType.FOR_CASHIER,
    enumSaleTableViewType.FOR_SELLER
  ])
};

SaleAddStepOneClientSelection.defaultProps = {
  saleTableViewType: undefined
};
