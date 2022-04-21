import React from "react";
import '../src/components/style.css'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Earth from "./components/Earth";
import Mars from "./components/Mars";
import Jupiter from "./components/Jupiter";
import Saturn from "./components/Saturn";
import Neptune from "./components/Neptune";
import Uranus from "./components/Uranus";


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/mercury" component={Mercury} exact />
          <Route path="/venus" component={Venus } exact />
          <Route path="/earth" component={Earth } exact />
          <Route path="/mars" component={Mars } exact />
          <Route path="/jupiter" component={Jupiter } exact />
          <Route path="/saturn" component={Saturn } exact />
          <Route path="/uranus" component={Uranus } exact />
          <Route path="/neptune" component={Neptune } exact />
          <Redirect to="/mercury" />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
