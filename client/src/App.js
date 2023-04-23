import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Details";
import Form from "./views/Form/Form";
import LandingPage from "./views/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  const { pathname } = useLocation(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [active, setActive] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(true);

  return (
    <div className="App">
      {pathname !== "/" && (
        <NavBar
          setCurrentPage={setCurrentPage}
          setActive={setActive}
          setLoading={setLoading}
        />
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <Home
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              active={active}
              setActive={setActive}
              loading={loading}
              setLoading={setLoading}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          }
        />
        <Route path="/form" element={<Form setRefresh={setRefresh} />} />
        <Route
          path="/detail/:id"
          element={<Detail setRefresh={setRefresh} />}
        />
      </Routes>
    </div>
  );
}

export default App;
