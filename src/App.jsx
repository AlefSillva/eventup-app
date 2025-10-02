import { useState } from "react";
import style from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Login from "./components/login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPages] = useState(0);

  const pages = [
    <Login />,
    // <Cadastro />,
    <Main />,
    // <Profile />
  ]

  const handleLogin = (page) => {
    setIsLoggedIn(true);
    setPages(page);
  };

  const handlePageChange = (newPage) => {
    setPages(newPage);
  }

  return (
    <div className={style.App_container}>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
            {page > 0 && <Header onPageChange={handlePageChange}/>}
            {pages[page]}
        </>
      )}
    </div>
  );
}

export default App;
