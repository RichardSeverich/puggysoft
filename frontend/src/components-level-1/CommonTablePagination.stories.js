import React from "react";
import CommonTablePagination from "./CommonTablePagination";
import enumFilterType from "./../models/enumFilterType";

export default {
  title: "CommonTablePagination",
  component: CommonTablePagination
};

const Template = (args) => <CommonTablePagination {...args} />;

const arrayData = [
  {
    name: "Gerard",
    lastName: "Nicson",
    age: 45,
    sex: "male",
    birthdate: "1985-02-16"
  },
  {
    name: "Jhon",
    lastName: "Doe",
    age: 40,
    sex: "male",
    birthdate: "1990-03-15"
  },
  {
    name: "Jimy",
    lastName: "Sebuc",
    age: 34,
    sex: "male",
    birthdate: "1996-07-15"
  },
  {
    name: "Jenny",
    lastName: "Dugs",
    age: 25,
    sex: "female",
    birthdate: "2002-07-15"
  },
  {
    name: "Kimberly",
    lastName: "Siggu",
    age: 20,
    sex: "female",
    birthdate: "1999-08-21"
  }
];

// TABLE
export const Example1 = Template.bind({});

Example1.args = {
  tableTitle: "Common table example 1",
  tableArrayData: arrayData,
  tableArrayColumns: ["Name", "Last Name", "Age", "Sex", "Birthdate"],
  tableArrayDataFields: ["name", "lastName", "age", "sex", "birthdate"],
  tableArrayCustomRowButtons: undefined,
  tableHandleEdit: () => { },
  tableHandleDelete: () => { },
  tableHandleExportExcel: () => { },
  tableHandleExportPdf: () => { },
  filterArrayColumns: undefined,
  filterClear: undefined,
  filterHandler: undefined
};

// TABLE
export const Example2 = Template.bind({});

Example2.args = {
  tableTitle: "Common table example 2",
  tableArrayData: arrayData,
  tableArrayColumns: ["Name", "Last Name", "Age", "Sex", "Birthdate"],
  tableArrayDataFields: ["name", "lastName", "age", "sex", "birthdate"],
  tableArrayCustomRowButtons: undefined,
  tableHandleEdit: undefined,
  tableHandleDelete: undefined,
  tableHandleExportExcel: undefined,
  tableHandleExportPdf: undefined,
  filterArrayColumns: undefined,
  filterClear: undefined,
  filterHandler: undefined,
  paginationTotalPages: 3,
  paginationNumberPagesToShow: 5,
  paginationInitialPage: 1,
  paginationActivePage: 1,
  paginationSetArrayData: () => { },
  paginationSetTotalPages: () => { },
  paginationSetActivePage: () => { },
  paginationSetInitialPage: () => { }
};

// TABLE
export const Example3 = Template.bind({});

Example3.args = {
  tableTitle: "Common table example 3",
  tableArrayData: arrayData,
  tableArrayColumns: ["Name", "Last Name", "Age", "Sex", "Birthdate"],
  tableArrayDataFields: ["name", "lastName", "age", "sex", "birthdate"],
  tableArrayCustomRowButtons: undefined,
  tableHandleEdit: () => { },
  tableHandleDelete: () => { },
  tableHandleExportExcel: () => { },
  tableHandleExportPdf: () => { },
  filterArrayColumns: [
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: "",
      criteriaOnchange: () => { },
      operatorValue: "",
      operatorOnchange: () => { }
    },
    {
      type: enumFilterType.TEXTBOX,
      criteriaValue: "",
      criteriaOnchange: () => { },
      operatorValue: "",
      operatorOnchange: () => { }
    },
    {
      type: enumFilterType.NUMBER,
      criteriaValue: "",
      criteriaOnchange: () => { },
      operatorValue: "",
      operatorOnchange: () => { }
    },
    {
      type: enumFilterType.DROPDOWN,
      criteriaValue: "",
      criteriaOnchange: () => { },
      operatorValue: "",
      operatorOnchange: () => { },
      dropdownValues: [
        { value: "", text: "All" },
        { value: "MALE", text: "MALE" },
        { value: "FEMALE", text: "FEMALE" }
      ]
    },
    {
      type: enumFilterType.DATE,
      criteriaValue: "",
      criteriaOnchange: () => { },
      operatorValue: "",
      operatorOnchange: () => { }
    }
  ],
  filterClear: () => { },
  filterHandler: () => { },
  paginationTotalPages: 10,
  paginationNumberPagesToShow: 5,
  paginationInitialPage: 1,
  paginationActivePage: 1,
  paginationSetArrayData: () => { },
  paginationSetTotalPages: () => { },
  paginationSetActivePage: () => { },
  paginationSetInitialPage: () => { }
};

// TABLE
export const ExampleEmpty = Template.bind({});
