import style from "./Login.module.css";
import Logo from "../../assets/eventUp-logo.png";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("teste@test.com");
  const [password, setPassword] = useState("1234");
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(email, password);

    if (result.success) {
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <section className={style.login_container}>
      <img src={Logo} alt="Logo" className={style.logo} />

      <div className={style.login_welcome}>
        <h2 className={style.login_welcome_title}>Welcome to EventUp!</h2>
        <p className={style.login_slogan}>
          Life happens <span className={style.login_highlight}>Live.</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className={style.login_form}>
        <input
          className={style.login_input}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={style.login_input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className={style.login_button}>
          Sign in
        </button>

        <a className={style.forgot_password} href="#">
          Forgot my password
        </a>

        <a
          onClick={() => navigate("/register")}
          className={style.switch_form_link}
          style={{ cursor: "pointer", marginTop: "15px" }}
        >
          Don't have an account? Register now
        </a>
      </form>
    </section>
  );
}
