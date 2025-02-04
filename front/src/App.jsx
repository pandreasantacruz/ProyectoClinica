import "./styles/App.css";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import OurServices from "./views/OurServices";
import Register from "./views/Register";
import OurStory from "./views/OurStory";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Misturnos from "./views/Misturnos";
import Contact from "./views/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact></Contact>} />
        <Route
          path="/nuestrosservicios"
          element={<OurServices></OurServices>}
        />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/nuestrahistoria" element={<OurStory></OurStory>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/" element={<Home></Home>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
