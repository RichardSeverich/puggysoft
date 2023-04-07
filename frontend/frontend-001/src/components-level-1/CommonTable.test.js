import React from "react";
import { render } from "@testing-library/react";
import CommonTable from "./CommonTable";

test("test common table", () => {
  const tableTitle = "Common table example";
  const arrayData = [{
    id: 1000,
    username: "admin",
    password: "admin123"
  }, {
    id: 1001,
    username: "rseveric",
    password: "secret123"
  }, {
    id: 1002,
    username: "visitor",
    password: "arbol123"
  }];
  const arrayDataFields = ["id", "username", "password"];
  const arrayColumns = ["ID", "Username", "Password"];

  const { container } = render(<CommonTable
    tableTitle={tableTitle}
    arrayData={arrayData}
    arrayDataFields={arrayDataFields}
    arrayColumns={arrayColumns}
  />);
  const commonTableHeaders = container.querySelector(".puggysoft-common-table table thead tr");
  const commonTableRows = container.querySelector(".puggysoft-common-table table tbody");
  const commonTableTitle = container.querySelector(".puggysoft-common-table h3");

  // Verify Title
  expect(commonTableTitle.textContent).toBe("Common table example");
  // Verify headers
  expect(commonTableHeaders.childNodes.length).toBe(3);
  expect(commonTableHeaders.childNodes[0].textContent).toBe("ID");
  expect(commonTableHeaders.childNodes[1].textContent).toBe("Username");
  expect(commonTableHeaders.childNodes[2].textContent).toBe("Password");
  // Verify row
  expect(commonTableRows.childNodes.length).toBe(3);
  // Row 1
  expect(commonTableRows.childNodes[0].childNodes[0].textContent).toBe("1000");
  expect(commonTableRows.childNodes[0].childNodes[1].textContent).toBe("admin");
  expect(commonTableRows.childNodes[0].childNodes[2].textContent).toBe("admin123");
  // Row 2
  expect(commonTableRows.childNodes[1].childNodes[0].textContent).toBe("1001");
  expect(commonTableRows.childNodes[1].childNodes[1].textContent).toBe("rseveric");
  expect(commonTableRows.childNodes[1].childNodes[2].textContent).toBe("secret123");
  // Row 3
  expect(commonTableRows.childNodes[2].childNodes[0].textContent).toBe("1002");
  expect(commonTableRows.childNodes[2].childNodes[1].textContent).toBe("visitor");
  expect(commonTableRows.childNodes[2].childNodes[2].textContent).toBe("arbol123");
});
