import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/404";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import DetailCharacter from "./pages/Characters/DetailCharacter";
import Planets from "./pages/Planets";
import DetailPlanet from "./pages/Planets/DetailPlanet";
import DetailShip from "./pages/Ships/DetailShip";
import Ships from "./pages/Ships";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="character-detail" element={<DetailCharacter />} />
          <Route path="planets" element={<Planets />} />
          <Route path="planet-detail" element={<DetailPlanet />} />
          <Route path="ships" element={<Ships />} />
          <Route path="ship-detail" element={<DetailShip />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
