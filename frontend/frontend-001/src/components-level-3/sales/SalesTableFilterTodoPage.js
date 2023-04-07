import React from "react";
import NavBar from "./../../components-level-2/navbar/NavBar";
import SalesTableFilterTodo from "./../../components-level-2/sales/SalesTableFilterTodo";

function SalesTableFilterTodoPage () {
  return (
    <div className="sale-table-page">
      <NavBar></NavBar>
      <SalesTableFilterTodo></SalesTableFilterTodo>
    </div>
  );
}

export default SalesTableFilterTodoPage;
