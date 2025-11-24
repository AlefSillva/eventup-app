import { useContext } from "react";
import { FavoritesContext } from "../../contexts/favorites/FavoritesContext";
import EventCard from "../../components/event_card/EventCard";
import style from "./Favorites.module.css";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <main className={style.favorites_container}>
      <h2 className={style.favorites_title}>Meus Eventos Favoritos ❤️</h2>

      {/* Caso não tenha nada favoritado */}
      {favorites.length === 0 && (
        <p className={style.empty_message}>
          Você ainda não favoritou nenhum evento.
        </p>
      )}

      <div className={style.favorites_list}>
        {favorites.map((event, index) => (
          <EventCard
            key={index}
            event={event.name}
            linkImage={event.linkImage}
            local={event.local}
            date={event.date}
            type={event.type}
          />
        ))}
      </div>
    </main>
  );
}
