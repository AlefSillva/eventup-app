import { useState } from "react";
import style from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState(2);

  const eventList = [
    {
      name: "Show de Rock",
      linkImage: "https://picsum.photos/400/200?random=1",
      local: "Avenida Aleatória Um, 123 - SP",
      date: "10/10/2025",
      type: "Música",
    },
    {
      name: "Feira de Tecnologia",
      linkImage: "https://picsum.photos/400/200?random=2",
      local: "Avenida Aleatória Dois, 456 - SP",
      date: "12/10/2025",
      type: "Tech",
    },
    {
      linkImage: "https://picsum.photos/400/200?random=3",
      name: "Aula de Yoga",
      local: "Avenida Aleatória Três, 789 - SP",
      date: "15/10/2025",
      type: "Saúde",
    },
    {
      linkImage: "https://picsum.photos/400/200?random=4",
      name: "Palestra Motivacional",
      local: "Avenida Aleatória Quatro, 101 - SP",
      date: "18/10/2025",
      type: "Educação",
    },
  ];

  const handleEventClick = () => {
    if (!isLoggedIn) {
      setPage(0);
    }
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

  const handleNavigateToRegister = () => {
    setPage(1); 
  };

  const handleNavigateToLogin = () => {
    setPage(0); 
  };

  const pages = [
    <Login onLogin={handleLogin} onNavigateToRegister={handleNavigateToRegister} />,
    <Cadastro onNavigateToLogin={handleNavigateToLogin} />,
    <Main events={eventList} onEventClick={handleEventClick} />,
  ];

  return (
    <div className={style.App_container}>
      {page > 1 && <Header onPageChange={handlePageChange} />}
      
      {pages[page]}

    </div>
  );
}

export default App;
