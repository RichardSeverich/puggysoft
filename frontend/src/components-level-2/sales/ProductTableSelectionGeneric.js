import { useHistory } from "react-router";
import i18n from "../../i18n/i18n";
import { handleFilterRequest } from "../../actions/HandleManager";
import ProductTableReducedGeneric from "./ProductTableReducedGeneric";

function ProductTableSelectionGeneric({
  urlToNavigate,
  tableTitle,
  tableSubTitle
}) {

  const pageSize = 10;
  const numberPagesToShow = 10;

  const history = useHistory();

  function handleGetData(activePage, filterBody, updateArrayData) {
    handleFilterRequest(`products/filter?page=${activePage - 1}&size=${pageSize}`, filterBody, updateArrayData);
  }

  function handleGetSize(filterBody, setTotalPages) {
    handleFilterRequest(`products/filter/size/${pageSize}`, filterBody, setTotalPages);
  }

  function handleGoReport(productData) {
    history.push({
      pathname: urlToNavigate,
      state: {
        productData: productData,
      }
    })
  }

  const tableArrayCustomRowButtons = [
    {
      variant: "success",
      handleCustom: handleGoReport,
      text: i18n.commonTable.selectButton
    },
  ]

  return (
    <ProductTableReducedGeneric
      tableTitle={tableTitle}
      tableSubTitle={tableSubTitle}
      numberPagesToShow={numberPagesToShow}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
    >
    </ProductTableReducedGeneric>
  )
}

export default ProductTableSelectionGeneric;