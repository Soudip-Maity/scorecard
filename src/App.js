// import logo from './logo.svg';
import "./App.css";
import Home from "./Pages/Home";
import TMinfo from "./Pages/TMinfo"
import { Router, Route, Routes } from "react-router-dom";
import Players from "./Pages/Players";
import H2h from "./Pages/H2h";
import Leaderboard from "./Components/Leaderboard";
import Create_team from "./Pages/Create_Team"
function App() {
  return (
    <>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tournament/:userId" element={<TMinfo/>}/>
      <Route path="/tournament/:tid/leaderboard" element={<Leaderboard/>}/>
      <Route path="/tournament/:tid/head_2_head" element={<H2h/>}/>
      <Route path="/players" element={<Players/>}/>
      <Route path="/Create_Team" element={<Create_team/>}/>
     </Routes>

     
    </>
  );
}

export default App;
 