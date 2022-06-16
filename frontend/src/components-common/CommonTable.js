import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import i18n from "../i18n/i18n";

import "./common-table-styles.css"
import enumFilterType from "../models/enumFilterType";
import enumCompareOperators from "../models/enumCompareOperators";


/**
 *  arrayData = [{},{},{},{}]
 *  arrayDataFields = ['field1', 'field2', 'field3']
 *  arrayColumns = ['column1', 'column2', 'column3']
 *  className = 'some-class-name'
 */
function CommonTable(props) {

  const {
    tableTitle,
    arrayData,
    arrayColumns,
    arrayDataFields,
    filterArrayColumns,
    filterClear,
    filterHandler
  } = props;

  const tableColumns = () => {
    return arrayColumns.map(function (data, index) {
      return <th key={'column-' + index}>{data}</th>
    })
  }

  const tableFilters = () => {
    const result = filterArrayColumns.map(function (filter, index) {
      if (enumFilterType.NONE === filter.type) {
        return <th key={'filter-' + index}>
          <Form.Control disabled placeholder="" />
        </th>
      } else if (enumFilterType.TEXTBOX === filter.type) {
        return <><th key={'filter-' + index}>
          <Form.Control
            value={filter.criteriaValue}
            onChange={filter.criteriaOnchange}
            placeholder="" />
          <Form.Select
            value={filter.operatorValue}
            onChange={filter.operatorOnchange}
          >
            <option value={enumCompareOperators.TEXT_CONTAINS}>{i18n.commonTable.filterTextContains}</option>
            <option value={enumCompareOperators.TEXT_EQUALS}>{i18n.commonTable.filterTextEquals}</option>
            <option value={enumCompareOperators.TEXT_START_WITH}>{i18n.commonTable.filterTextStartWith}</option>
            <option value={enumCompareOperators.TEXT_END_WITH}>{i18n.commonTable.filterTextEndWith}</option>
          </Form.Select>
        </th></>
      } else if (enumFilterType.DATE === filter.type) {
        return <th key={'filter-' + index}>
          <Form.Control
            value={filter.criteriaValue}
            onChange={filter.criteriaOnchange}
            type="date" placeholder="" />
          <Form.Select
            value={filter.operatorValue}
            onChange={filter.operatorOnchange}
          >
            <option value={enumCompareOperators.DATE_EQUALS}>{i18n.commonTable.filterDateEquals}</option>
            <option value={enumCompareOperators.DATE_GREATER_EQUALS_THAN}>{i18n.commonTable.filterDateGreaterEqualsThan}</option>
            <option value={enumCompareOperators.DATE_GREATER_THAN}>{i18n.commonTable.filterDateGreaterThan}</option>
            <option value={enumCompareOperators.DATE_SMALLER_EQUALS_THAN}>{i18n.commonTable.filterDateSmallerEqualsThan}</option>
            <option value={enumCompareOperators.DATE_SMALLER_THAN}>{i18n.commonTable.filterDateSmallerThan}</option>
          </Form.Select>
        </th>
      } else if (enumFilterType.DATE_RANGE === filter.type) {
        return <th key={'filter-' + index}>
          <Form.Control
            value={filter.criteriaValueStartDate}
            onChange={filter.criteriaOnchangeStartDate}
            type="date" placeholder="" />
          <Form.Control
            value={filter.criteriaValueStartEnd}
            onChange={filter.criteriaOnchangeStartEnd}
            type="date" placeholder="" />
        </th>
      } else if (enumFilterType.DROPDOWN === filter.type) {
        return <th key={'filter-' + index}>
          <Form.Select
            value={filter.criteriaValue}
            onChange={filter.criteriaOnchange}
          >
            {
              filter.dropdownValues.map(function (item, index) {
                return <option key={'option-' + index} value={item.value}>{item.text}</option>
              })
            }
          </Form.Select>
        </th>
      } else if (enumFilterType.NUMBER === filter.type) {
        return <><th key={'filter-' + index}>
          <Form.Control
            value={filter.criteriaValue}
            onChange={filter.criteriaOnchange}
            type="number"
            placeholder="" />
          <Form.Select
            value={filter.operatorValue}
            onChange={filter.operatorOnchange}
          >
            <option value={enumCompareOperators.NUMBER_EQUALS}>{i18n.commonTable.filterNumberEquals}</option>
            <option value={enumCompareOperators.NUMBER_GREATER_EQUALS_THAN}>{i18n.commonTable.filterNumberGreaterEqualsThan}</option>
            <option value={enumCompareOperators.NUMBER_GREATER_THAN}>{i18n.commonTable.filterNumberGreaterThan}</option>
            <option value={enumCompareOperators.NUMBER_SMALLER_EQUALS_THAN}>{i18n.commonTable.filterNumberSmallerEqualsThan}</option>
            <option value={enumCompareOperators.NUMBER_SMALLER_THAN}>{i18n.commonTable.filterNumberSmallerThan}</option>
          </Form.Select>
        </th></>
      } else {
        return <th key={'filter-' + index}><Form.Control disabled placeholder="" /></th>
      }
    })
    return result;
  }

  const tableRows = () => {
    return arrayData.map(function (data, rowIndex) {
      const totalRows = <tr key={'row-' + rowIndex}>
        {arrayDataFields.map(function (field, fieldIndex) {
          const singleRow = <td key={'field-' + fieldIndex}>{data[field]}</td>;
          return singleRow;
        })}
        {<td key={'field-edit' + rowIndex}>
          <Button variant="warning">{i18n.commonTable.editButton}</Button> </td>}
        {<td key={'field-delete' + rowIndex}>
          <Button variant="danger">{i18n.commonTable.deleteButton}</Button> </td>}
      </tr>
      return totalRows;
    })
  }

  const filterActionButtons = () => {
    return (
      <>
        <Button
          onClick={filterHandler}
          variant="info puggysoft-filter-button">{i18n.commonTable.filterButton}</Button>
        <Button
          onClick={filterClear}
          variant="secondary puggysoft-clean-button"
        >{i18n.commonTable.cleanButton}</Button>
      </>
    )
  }

  return (
    <div className="puggysoft-common-table" >
      <h3>{tableTitle}</h3>
      <div className='puggysoft-table-actions'>
        {filterArrayColumns && filterArrayColumns.length > 0 && filterActionButtons()}
        <Button variant="primary puggysoft-excel-export-button">{i18n.commonTable.excelExportButton}</Button>
        <Button variant="success puggysoft-pdf-export-button">{i18n.commonTable.pdfExportButton}</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {tableColumns()}
          </tr>
          <tr>
            {filterArrayColumns && filterArrayColumns.length > 0 && tableFilters()}
          </tr>
        </thead>
        <tbody>
          {tableRows()}
        </tbody>
      </Table>
    </div>
  )
}

export default CommonTable;
