import { useHistory } from "react-router";
import UserTableFilterGenericByRole from "./../generic/UserTableFilterGenericByRole";
import enumRoles from "./../../models/users/enumRoles"
import enumSaleStatus from "./../../models/sales/enumSaleStatus"
import { handleAddRequest } from "../../actions/HandleManager";
import enumPaths from "./../../models/enumPaths"
import i18n from "../../i18n/i18n";

function SaleAddStepOneClientSelection() {

  const tableTitle = i18n.clientTable.titleSelectionToSales;
  const roleName = enumRoles.SALES_CLIENT;
  const history = useHistory();

  function handleSelection(clientData) {
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
      history.push({
        pathname: enumPaths.SALES_REGISTRATION_STEP_TWO,
        state: {
          data: { clientData, saleData },
        }
      })
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

  return (
    <UserTableFilterGenericByRole
      roleName={roleName}
      tableTitle={tableTitle}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
    >
    </UserTableFilterGenericByRole>
  )
}


export default SaleAddStepOneClientSelection;