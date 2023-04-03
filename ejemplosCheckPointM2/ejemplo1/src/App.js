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
        <Route path="/" element={<Teams />}></Route>
        <Route path="/team/create" element={<CreateTeam />}></Route>
        <Route path="/teams/:teamId" element={<TeamDetail />}></Route>
        <Route path="/otraRuta"/>
      </Routes>
    </div>
  );
}

export default App;
