import { Routes, Route } from "react-router-dom";
import { useUser } from "./context/useUser";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./views/Contact";
import OurServices from "./views/OurServices";
import Register from "./views/Register";
import OurStory from "./views/OurStory";
import Login from "./components/Login";
import Home from "./views/Home";
import { Misturnos } from "./views/Misturnos";
import PedirTurno from "./views/PedirTurno";

function App() {
  const { user } = useUser();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/nuestrosservicios" element={<OurServices />} />
        <Route path="/register" element={<Register />} />
        <Route path="/nuestrahistoria" element={<OurStory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        {user ? (
          <>
            <Route path={`/appointments/${user.id}`} element={<Misturnos />} />
            <Route
              path={`/appointments/schedule/${user.id}`}
              element={<PedirTurno />}
            />
          </>
        ) : (
          <Route path="*" element={<Login />} />
        )}
        <Route
          path="*"
          element={
            <h1>
              <strong>Error 404 page not found</strong>
            </h1>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
