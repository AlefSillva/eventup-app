import style from "./Cadastro.module.css";
import Logo from "../../assets/eventUp-logo.png";
import { useState } from "react";

export default function Cadastro({ onNavigateToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log("Novo usuário cadastrado:", { name, email });
    alert("Cadastro realizado com sucesso!");
    onNavigateToLogin();
  };

  return (
    <section className={style.cadastro_container}>
      <img src={Logo} alt="Logo" className={style.logo} />

      <div className={style.cadastro_welcome}>
        <h2 className={style.cadastro_welcome_title}>Crie sua Conta</h2>
        <p className={style.cadastro_slogan}>
          E descubra seu próximo{" "}
          <span className={style.login_highlight}>evento.</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className={style.cadastro_form}>
        <input
          className={style.cadastro_input}
          type="text"
          placeholder="Nome Completo"
          value={name}
          onChange={onChangeName}
        />

        <input
          className={style.cadastro_input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
        />

        <input
          className={style.cadastro_input}
          type="password"
          placeholder="Senha"
          value={password}
          onChange={onChangePassword}
        />

        <input
          className={style.cadastro_input}
          type="password"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
        />

        <button type="submit" className={style.cadastro_button}>
          Cadastrar
        </button>

        <a onClick={onNavigateToLogin} className={style.switch_form_link} style={{cursor: 'pointer'}}>
          Já tem uma conta? Faça login
        </a>
      </form>
    </section>
  );
}