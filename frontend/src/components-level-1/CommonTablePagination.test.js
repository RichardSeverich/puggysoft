import React from "react";
import { render } from "@testing-library/react";
import CommonTablePagination from "./CommonTablePagination";

test("test common pagination table", () => {
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
  const setInitialPage = function () {
    console.log("setInitialPage was clicked");
  };
  const setActivePage = function () {
    console.log("setActivePage  was clicked");
  };
  const setArrayData = function () {
    console.log("setArrayData was clicked");
  };
  const setTotalPages = function (newPage) {
    console.log("setTotalPages was clicked" + newPage);
  };
  const { container } = render(<CommonTablePagination
    tableTitle={tableTitle}
    tableArrayData={arrayData}
    tableArrayDataFields={arrayDataFields}
    tableArrayColumns={arrayColumns}
    paginationActivePage={4}
    paginationTotalPages={30}
    paginationInitialPage={1}
    setArrayData={setArrayData}
    setTotalPages={setTotalPages}
    setActivePage={setActivePage}
    setInitialPage={setInitialPage}
  />);
  const commonTableHeaders = container.querySelector(".puggysoft-common-table table thead tr");
  const commonTableRows = container.querySelector(".puggysoft-common-table table tbody");
  const commonTablePagination = container.querySelector(".puggysoft-common-pagination ul");
  expect(commonTableHeaders.childNodes.length).toBe(3);
  expect(commonTableRows.childNodes.length).toBe(3);
  // 10 numbers + Prev + Next + Last + First - Last + More.
  expect(commonTablePagination.childNodes.length).toBe(15);
});
