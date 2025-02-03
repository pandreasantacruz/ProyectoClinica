import "./styles/App.css";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
//import Register from "./views/Register";
//import Login from "./components/Login";
import Navbar from "./components/navbar";
//import Misturnos from "./views/Misturnos";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route />
        <Route path="/home" element={<Home></Home>} />
      </Routes>
      <h1 className="Titulo">Bienvenido</h1>
    </>
  );
}

export default App;
