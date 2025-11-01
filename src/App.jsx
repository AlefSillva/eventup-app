import { useState } from "react";
import style from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import EventsProvider from "./components/contexts/events/EventsProvider";
import { EventsContext } from "./components/contexts/events/EventsContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState(2);

  const handleEventClick = () => {
    if (!isLoggedIn) setPage(0);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setPage(2);
  };

  const handlePageChange = (newPage) => {
    if (!isLoggedIn && newPage !== 0) {
      setPage(0);
    } else {
      setPage(newPage);
    }
  };

  const handleNavigateToRegister = () => setPage(1);
  const handleNavigateToLogin = () => setPage(0);
  
  
  return (
    <EventsProvider>
      <div className={style.App_container}>
        {page > 1 && <Header onPageChange={handlePageChange} />}

        {page === 0 && <Login onLogin={handleLogin} onNavigateToRegister={handleNavigateToRegister} />}

        {page === 1 && <Cadastro onNavigateToLogin={handleNavigateToLogin} />}

        {page === 2 && <Main onEventClick={handleEventClick} />}
      </div>
    </EventsProvider>
  );
}

export default App;
