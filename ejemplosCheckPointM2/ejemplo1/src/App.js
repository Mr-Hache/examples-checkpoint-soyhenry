// Tus rutas acá
import React from "react";
import { Route, Routes } from "react-router-dom";
import Teams from "./components/Teams/Teams";
import CreateTeam from "./components/CreateTeam/CreateTeam";
import TeamDetail from "./components/TeamDetail/TeamDetail";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Teams />}></Route>
        <Route exact path="/team/create" element={<CreateTeam />}></Route>
        <Route exact path="/teams/:teamId" element={<TeamDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
