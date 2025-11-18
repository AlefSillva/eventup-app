import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import style from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import EventsProvider from "./components/contexts/events/EventsProvider";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);

  return (
    <EventsProvider>
      <Router>
        <div className={style.App_container}>
          {isLoggedIn && <Header />}

          <Routes>
            <Route
              path="/login"
              element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/" />}
            />

            <Route
              path="/register"
              element={!isLoggedIn ? <Cadastro /> : <Navigate to="/" />}
            />

            <Route
              path="/"
              element={isLoggedIn ? <Main /> : <Navigate to="/login" />}
            />

            <Route
              path="/events"
              element={isLoggedIn ? <Main /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={isLoggedIn ? <Main /> : <Navigate to="/login" />}
            />

            <Route
              path="*"
              element={<Navigate to={isLoggedIn ? "/" : "/login"} />}
            />
          </Routes>
        </div>
      </Router>
    </EventsProvider>
  );
}

export default App;
