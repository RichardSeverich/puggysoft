import Table from 'react-bootstrap/Table'
import CommonPagination from './CommonPagination'
import "./styles.css"

/**
 *  arrayData = [{},{},{},{}]
 *  arrayDataFields = ['field1', 'field2', 'field3']
 *  arrayColumns = ['column1', 'column2', 'column3']
 *  className = 'some-class-name'
 */
function CommonTable(props) {

  const tableColumns = () => {
    return props.arrayColumns.map(function (data, index) {
      return <th key={'column-' + index}>{data}</th>
    })
  }

  const tableRows = () => {
    return props.arrayData.map(function (data, rowIndex) {
      return <tr key={'row-' + rowIndex}>{props.arrayDataFields.map(function (field, fieldIndex) {
        return <td key={'field-' + fieldIndex}>{data[field]}</td>;
      })}</tr>
    })
  }

  return (
    <div className="puggysoft-common-table" >
      <Table responsive="md" striped bordered hover>
        <thead>
          <tr>
            {tableColumns()}
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
