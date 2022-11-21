import TableFilterGeneric from "./../generic/TableFilterGeneric";
import arrayDataFields from "../../models/sales/arrayProductDataFieldsReducedSuper";
import arrayColumnsDefault from "../../models/sales/arrayProductColumnsReducedSuper";
import enumCompareOperators from "./../../models/enumCompareOperators";
import useInput from "./../../hooks/useInput";
import getColumnsFilterModel from "../../models/sales/arrayProductColumnsFilterSelectionReducedSuper";


function ProductTableSuperReducedGeneric(props) {

  const { numberPagesToShow, tableTitle, handleGetData, handleGetSize, tableArrayCustomRowButtons } = props
  const arrayColumns = props.arrayColumns ? props.arrayColumns : arrayColumnsDefault;

  // CRITERIA OF SEARCH OR FILTER
  const { value: criteriaName, onChange: criteriaOnChangeName, setValue: criteriaSetName } = useInput('');
  const { value: criteriaSalePrice, onChange: criteriaOnChangeSalePrice, setValue: criteriaSetSalePrice } = useInput('');
  const { value: criteriaStock, onChange: criteriaOnChangeStock, setValue: criteriaSetStock } = useInput('');

  // FILTER OPERATORS
  const { value: operatorName, onChange: operatorOnChangeName, setValue: operatorSetName } = useInput(enumCompareOperators.TEXT_CONTAINS);
  const { value: operatorSalePrice, onChange: operatorOnChangeSalePrice, setValue: operatorSetSalePrice } = useInput(enumCompareOperators.NUMBER_EQUALS);
  const { value: operatorStock, onChange: operatorOnChangeStock, setValue: operatorSetStock } = useInput(enumCompareOperators.NUMBER_EQUALS);

  const { arrayColumnsFilter, clearFilters, getFilterBody } = getColumnsFilterModel(
    /*NAME*/ criteriaName, criteriaOnChangeName, criteriaSetName, operatorName, operatorOnChangeName, operatorSetName,
    /*SALE PRICE*/ criteriaSalePrice, criteriaOnChangeSalePrice, criteriaSetSalePrice, operatorSalePrice, operatorOnChangeSalePrice, operatorSetSalePrice,
    /*STOCK*/criteriaStock, criteriaOnChangeStock, criteriaSetStock, operatorStock, operatorOnChangeStock, operatorSetStock,
  );

  return (
    <TableFilterGeneric
      arrayColumns={arrayColumns}
      arrayDataFields={arrayDataFields}
      handleGetData={handleGetData}
      handleGetSize={handleGetSize}
      tableTitle={tableTitle}
      tableArrayCustomRowButtons={tableArrayCustomRowButtons}
      numberPagesToShow={numberPagesToShow}
      arrayColumnsFilter={arrayColumnsFilter}
      clearFilters={clearFilters}
      getFilterBody={getFilterBody}
    >
    </TableFilterGeneric>
  )
}

export default ProductTableSuperReducedGeneric;