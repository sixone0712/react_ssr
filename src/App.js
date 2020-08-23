import React from "react";
import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import { Route } from "react-router-dom";
import BluePage from "./pages/BluePage";

function App() {
  return (
    <div className="App">
      <div>
        <Menu />
        <hr />
        <Route path={"/red"} component={RedPage} />
        <Route path={"/blue"} component={BluePage} />
      </div>
    </div>
  );
}

export default App;
