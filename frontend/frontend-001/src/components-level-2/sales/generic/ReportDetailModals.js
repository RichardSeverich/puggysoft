import i18n from "../../../i18n/i18n";
import {
  handleFilterRequest,
} from "../../../actions/HandleManager";
import ProductGenericTable from "./ProductGenericTable";
import ProductGroupGenericTable from "./ProductGroupGenericTable";
import UserTableFilterGenericReduced from "../../users/UserTableFilterGenericReduced";
import enumTableColumnsToShow from "../../../models/enumTableColumnsToShow";

function ReportDetailModals (props) {
  const {
    getOption,
    setSelect,
    setTableVisible,
    setValidateTemplate,
    role,
  } = props

  const tableTitle = {
    product: i18n.productTable.title,    
    groupProduct: i18n.productGroupTable.productGroupTable,    
    client: i18n.clientTable.title,
  }
  const GenericTable = {
    product: ProductGenericTable,    
    groupProduct: ProductGroupGenericTable,    
    client: UserTableFilterGenericReduced,
  }
  const pageSize = 8;
  const numberPagesToShow = 8;

  function handleGetDataProducts (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`products/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSizeProducts (filterBody, setTotalPages) {
    handleFilterRequest(`products/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleGetDataProductGroups (activePage, filterBody, updateArrayData) {
    handleFilterRequest(`product-groups/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSizeProductGroups (filterBody, setTotalPages) {
    handleFilterRequest(`product-groups/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleGetDataClients (activePage, filterBody, updateArrayData) {
    const tenant = window.sessionStorage.getItem("tenant");
    handleFilterRequest(`users/filter/with-roles-and-tenants?page=${activePage - 1}&size=${pageSize}&idRole=${role.id}&tenant=${tenant}`,
      filterBody, updateArrayData);
  }

  function handleGetSizeClients (filterBody, setTotalPages) {
    const tenant = window.sessionStorage.getItem("tenant");
    handleFilterRequest(`users/filter/with-roles-and-tenants/size?&pageSize=${pageSize}&idRole=${role.id}&tenant=${tenant}`,
      filterBody, setTotalPages);
  }

  const getOptionToTable = {
  product: {
    handleGetData: handleGetDataProducts,
    handleGetSize: handleGetSizeProducts
  },    
  groupProduct: {
    handleGetData: handleGetDataProductGroups,
    handleGetSize: handleGetSizeProductGroups
  },    
  client: {
    handleGetData: handleGetDataClients,
    handleGetSize: handleGetSizeClients
  },
  }

  const handleSelect = function (option) {
    setSelect(option);
    setTableVisible(false);
    setValidateTemplate((stateBefore) => {
      return {
        ...stateBefore,
        [getOption]: false,
      }
    })
  };

  const tableArrayCustomRowButtons = [
    {
      variant: "info",
      handleCustom: handleSelect,
      text: i18n.commonTable.selectButton
    }
  ];

  const Component = GenericTable[getOption]
  return (
    <div>
      <Component
        tableTitle={tableTitle[getOption]}
        numberPagesToShow={numberPagesToShow}
        handleGetData={getOptionToTable[getOption].handleGetData}
        handleGetSize={getOptionToTable[getOption].handleGetSize}
        tableArrayCustomRowButtons={tableArrayCustomRowButtons}
        columnsToShow={enumTableColumnsToShow.MINIMUM}
      />
    </div>
  );
}

export default ReportDetailModals;
