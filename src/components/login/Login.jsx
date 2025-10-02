import style from "./Login.module.css";
import Logo from "../../assets/eventUp-logo.png";

export default function Login() {
  return (
    <section className={style.login_container}>
      <img src={Logo} alt="Logo" className={style.logo} />
      <div className={style.login_welcome}>
        <h2>Bem-Vindo ao EventUp!</h2>
        <p className={style.login_slogan}>
          A vida acontece{" "}
          <span className={style.login_highlight}>Ao Vivo.</span>
        </p>
      </div>
      <form action="" className={style.login_form}>
        <input
          className={style.login_input}
          type="text"
          id="email"
          placeholder="Email"
        />
        <input
          className={style.login_input}
          type="text"
          id="senha"
          placeholder="Senha"
        />

        <button type="submit" className={style.login_button}>
          Entrar
              </button>
              
        <a href="#" className={style.forgot_password}>
          Esqueci minha senha
        </a>
      </form>
    </section>
  );
}
