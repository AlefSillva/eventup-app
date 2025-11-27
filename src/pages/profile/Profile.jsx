import style from "./Profile.module.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <main className={style.profile_container}>
      <h2 className={style.profile_title}>My Profile</h2>

      <div className={style.profile_box}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Status:</strong> Logged In</p>
      </div>
    </main>
  );
}
