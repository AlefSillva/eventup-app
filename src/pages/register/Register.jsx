import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import style from "./Register.module.css";
import Logo from "../../assets/eventUp-logo.png";

export default function Register() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    // ----- Registra o usuário -----
    register({ name, email, password });

    alert("Registration successful!");

    navigate("/login");
  };

  return (
    <section className={style.register_container}>
      <img src={Logo} alt="Logo" className={style.logo} />

      <div className={style.register_welcome}>
        <h2 className={style.register_welcome_title}>Create Your Account</h2>
        <p className={style.register_slogan}>
          And discover your next{" "}
          <span className={style.register_highlight}>event.</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className={style.register_form}>
        <input
          className={style.register_input}
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className={style.register_input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={style.register_input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className={style.register_button}>
          Register
        </button>

        <a
          onClick={() => navigate("/login")}
          className={style.switch_form_link}
          style={{ cursor: "pointer" }}
        >
          Already have an account? Sign in
        </a>
      </form>
    </section>
  );
}
