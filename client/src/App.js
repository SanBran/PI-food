import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./views/Home/Home";
import Detail from "./views/Detail/Details";
import Form from "./views/Form/Form";
import LandingPage from "./views/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
