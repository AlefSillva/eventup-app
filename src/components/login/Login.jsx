import style from "./Login.module.css";
import Logo from "../../assets/eventUp-logo.png";
import { useState } from "react";

export default function Login({ onLogin }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    }
    
    return (
        <section className={style.login_container}>
        <img src={Logo} alt="Logo" className={style.logo} />

        <div className={style.login_welcome}>
            <h2 className={style.login_welcome_title}>Bem-Vindo ao EventUp!</h2>
            <p className={style.login_slogan}>
            A vida acontece{" "}
            <span className={style.login_highlight}>Ao Vivo.</span>
            </p>
        </div>

        <form
            onSubmit={handleSubmit}
            className={style.login_form}
        >
            <input
            className={style.login_input}
            type="text"
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
            />

            <input
            className={style.login_input}
            type="text"
            placeholder="Senha"
            value={password}
            onChange={onChangePassword}
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
