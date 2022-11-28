import React from "react";
import CommonTable from "./CommonTable";
import enumFilterType from "./../models/enumFilterType";

export default {
  title: "CommonTable",
  component: CommonTable
};

const Template = (args) => <CommonTable {...args} />;

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
export const CommonTableTemplate1 = Template.bind({});

CommonTableTemplate1.args = {
  tableTitle: "Common table example",
  arrayData,
  arrayColumns: ["Name", "Last Name", "Age", "Sex", "Birthdate"],
  arrayDataFields: ["name", "lastName", "age", "sex", "birthdate"],
  arrayCustomRowButtons: undefined,
  handleEdit: () => { },
  handleDelete: () => { },
  handleExportExcel: () => { },
  handleExportPdf: () => { },
  filterArrayColumns: undefined,
  filterClear: undefined,
  filterHandler: undefined
};

// TABLE
export const CommonTableTemplate2 = Template.bind({});

CommonTableTemplate2.args = {
  tableTitle: "Common table example",
  arrayData,
  arrayColumns: ["Name", "Last Name", "Age", "Sex", "Birthdate"],
  arrayDataFields: ["name", "lastName", "age", "sex", "birthdate"],
  arrayCustomRowButtons: undefined,
  handleEdit: undefined,
  handleDelete: undefined,
  handleExportExcel: undefined,
  handleExportPdf: undefined,
  filterArrayColumns: undefined,
  filterClear: undefined,
  filterHandler: undefined
};

// TABLE
export const CommonTableTemplate3 = Template.bind({});

CommonTableTemplate3.args = {
  tableTitle: "Common table example",
  arrayData,
  arrayColumns: ["Name", "Last Name", "Age", "Sex", "Birthdate"],
  arrayDataFields: ["name", "lastName", "age", "sex", "birthdate"],
  arrayCustomRowButtons: undefined,
  handleEdit: () => { },
  handleDelete: () => { },
  handleExportExcel: () => { },
  handleExportPdf: () => { },
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
  filterHandler: () => { }
};

// TABLE
export const CommonTableTemplateEmpty = Template.bind({});
