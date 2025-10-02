import style from "./App.module.css"
// import Header from "./components/header/Header";
// import Main from "./components/main/Main";
import Login from "./components/login/Login";

function App() {
  return (
    <div className={style.App_container}>
      {/* <Header /> */}
      <Login />
      {/* <Main /> */}
    </div>
  );
}

export default App
