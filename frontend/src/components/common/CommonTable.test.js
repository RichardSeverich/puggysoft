import { render } from '@testing-library/react';
import CommonTable from './CommonTable';

test('test common table', () => {
    const arrayData = [{
        "id": 1000,
        "username": "admin",
        "password": "admin123"
    }, {
        "id": 1001,
        "username": "rseveric",
        "password": "secret123"
    }, {
        "id": 1002,
        "username": "visitor",
        "password": "arbol123"
    }]
    const arrayDataFields = ['id', 'username', 'password']
    const arrayColumns = ['ID', 'Username', 'Password']
    const { container } = render(<CommonTable
        arrayData={arrayData}
        arrayDataFields={arrayDataFields}
        arrayColumns={arrayColumns}
    />);
    const commonTableHeaders = container.querySelector('.puggysoft-common-table table thead tr')
    const commonTableRows = container.querySelector('.puggysoft-common-table table tbody')
    expect(commonTableHeaders.childNodes.length).toBe(3);
    expect(commonTableRows.childNodes.length).toBe(3);
});
