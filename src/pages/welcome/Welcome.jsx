import style from "./Welcome.module.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { FavoritesContext } from "../../contexts/favorites/FavoritesContext";

export default function Welcome() {
  const { user } = useContext(AuthContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className={style.welcome_container}>
      <h1 id='welcome' className={style.welcome_title}>
        Welcome, {user.name}
      </h1>

      <div className={style.dashboard_content}>
        <section className={style.favorites_section}>
          <h2>Your Favorite Events:</h2>
          {favorites.length === 0 ? (
            <p className={style.no_favorites_message}>
              You have no favorite events yet. Start exploring!
            </p>
          ) : (
            <ul className={style.favorites_list}>
              {favorites.slice(0, 3).map((event) => (
                <li key={event.id}>{event.name}</li>
              ))}
              {favorites.length > 3 && (
                <p className={style.no_favorites_message}>
                  ...and {favorites.length - 3} more favorites.
                </p>
              )}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
