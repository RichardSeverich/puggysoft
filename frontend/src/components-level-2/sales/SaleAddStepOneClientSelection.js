import { useHistory } from "react-router";
import { useState } from "react";
import UserTableFilterGenericByRoleReduced from "./../generic/UserTableFilterGenericByRoleReduced";
import enumRoles from "./../../models/users/enumRoles"
import enumSaleStatus from "./../../models/sales/enumSaleStatus"
import { handleAddRequest, handleGetRequest } from "../../actions/HandleManager";
import enumPaths from "./../../models/enumPaths"
import i18n from "../../i18n/i18n";
import CommonLoading from '../../components-level-1/CommonLoading';


function SaleAddStepOneClientSelection() {

  const tableTitle = i18n.clientTable.titleSelectionToSales;
  const roleName = enumRoles.SALES_CLIENT;
  const history = useHistory();
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  function handleSelection(clientData) {
    setIsRequestInProgress(true);
    const username = window.sessionStorage.getItem("username");
    const saleStatus = enumSaleStatus.DONE;
    const bodySale = {
      client: clientData.username,
      status: saleStatus,
      createdBy: username,
      updatedBy: username,
    }
    function handleAfterCreateSale(saleId) {
      const saleData = bodySale;
      saleData['id'] = saleId;
      function handleGetNewSale(saleDataFromRequest) {
        saleData['creationDate'] = saleDataFromRequest.creationDate;
        history.push({
          pathname: enumPaths.SALES_REGISTRATION_STEP_TWO,
          state: {
            data: { saleData },
          }
        })
      }
      handleGetRequest(`sales/${saleId}`, handleGetNewSale)
    }
    handleAddRequest("sales/", bodySale, handleAfterCreateSale, false);
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "success",
      handleCustom: handleSelection,
      text: i18n.commonTable.selectButton
    }
  ]

  if (isRequestInProgress) {
    return <CommonLoading />
  }

  return (
    <UserTableFilterGenericByRoleReduced
      roleName={roleName}
      tableTitle={tableTitle}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
    >
    </UserTableFilterGenericByRoleReduced>
  )
}


export default SaleAddStepOneClientSelection;