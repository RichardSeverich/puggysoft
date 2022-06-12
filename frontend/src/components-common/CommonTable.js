import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import i18n from "../i18n/i18n";

import "./common-table-styles.css"
import enumTableColumnFilter from "../models/enumTableColumnFilter";

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
  } = props;

  const tableColumns = () => {
    return arrayColumns.map(function (data, index) {
      return <th key={'column-' + index}>{data}</th>
    })
  }

  const tableFilters = () => {
    const result = filterArrayColumns.map(function (filter, index) {
      if (enumTableColumnFilter.TEXTBOX === filter) {
        return <><th key={'filter-' + index}>
          <Form.Control placeholder="" />
          <Form.Select>
            <option value="contains">Contiene</option>
            <option value="equals">Igual que</option>
            <option value="equals">Empiza por</option>
          </Form.Select>
        </th></>
      } else if (enumTableColumnFilter.NONE === filter) {
        return <th key={'filter-' + index}><Form.Control disabled placeholder="" /></th>
      } else if (enumTableColumnFilter.DATE === filter) {
        return <th key={'filter-' + index}><Form.Control type="date" placeholder="" /></th>
      } else if (enumTableColumnFilter.DROPDOWN === filter) {
        return <th key={'filter-' + index}>
          <Form.Select>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </th>
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
        <Button variant="info puggysoft-filter-button">{i18n.commonTable.filterButton}</Button>
        <Button variant="secondary puggysoft-clean-button">{i18n.commonTable.cleanButton}</Button>
      </>
    )
  }

  return (
    <div className="puggysoft-common-table" >
      <h3>{tableTitle}</h3>
      <div classname='puggysoft-table-actions'>
        {filterArrayColumns && filterArrayColumns.length > 0 && filterActionButtons()}
        <Button variant="primary puggysoft-excel-export-button">{i18n.commonTable.excelExportButton}</Button>
        <Button variant="success puggysoft-pdf-export-button">{i18n.commonTable.pdfExportButton}</Button>
      </div>
      <Table responsive="xl" striped bordered hover>
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
