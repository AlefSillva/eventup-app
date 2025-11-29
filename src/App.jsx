import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";

import style from "./App.module.css";

import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Events from "./pages/events/Events";
import EventDetails from "./pages/event_details/EventDetails";
import Home from "./pages/home/Home";
import Welcome from "./pages/welcome/Welcome";
import Favorites from "./pages/favorites/Favorites";

import EventsProvider from "./contexts/events/EventsProvider";
import FavoritesProvider from "./contexts/favorites/FavoritesProvider";
import AuthProvider from "./contexts/auth/AuthProvider";
import { AuthContext } from "./contexts/auth/AuthContext";

function AppContent() {
  const { user } = useContext(AuthContext);
  const isLoggedIn = !!user;

  return (
    <div className={style.App_container}>
      <Header />

      <Routes>
        <Route
          path="/login"
          element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
        />

        <Route
          path="/register"
          element={!isLoggedIn ? <Register /> : <Navigate to="/" />}
        />

        <Route
          path="/"
          element={isLoggedIn ? <Welcome /> : <Home limit={4} />}
        />

        <Route
          path="/events"
          element={isLoggedIn ? <Events /> : <Navigate to="/login" />}
        />

        <Route
          path="/event/:id"
          element={isLoggedIn ? <EventDetails /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
        />

        <Route
          path="/favorites"
          element={isLoggedIn ? <Favorites /> : <Navigate to="/login" />}
        />

        <Route
          path="*"
          element={<Navigate to="/"/>}
        />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <EventsProvider>
        <FavoritesProvider>
          <Router>
            <AppContent />
          </Router>
        </FavoritesProvider>
      </EventsProvider>
    </AuthProvider>
  );
}
