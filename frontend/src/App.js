import { useState, useEffect } from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import UserTable from './components/users/UserTable';
import ProductTable from './components/sales/ProductTable';

function App() {
  return (
    <div className="App">
      <ProductTable></ProductTable>
    </div>
  );
}

export default App;
