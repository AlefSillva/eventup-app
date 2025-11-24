import style from "./Profile.module.css";

export default function Profile() {
  return (
    <main className={style.profile_container}>
      <h2 className={style.profile_title}>Meu Perfil</h2>

      <div className={style.profile_box}>
        <p><strong>Nome:</strong> Usuário</p>
        <p><strong>Email:</strong> usuario@email.com</p>
        <p><strong>Status:</strong> Logado</p>
      </div>
    </main>
  );
}
