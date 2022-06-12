import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App(props) {

  const { children } = props;
  return (
    <div className="App">
      {children}
    </div>
  );
}

export default App;
