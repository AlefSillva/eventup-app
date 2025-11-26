import { useContext } from "react";
import { FavoritesContext } from "../../contexts/favorites/FavoritesContext";
import EventCard from "../../components/event_card/EventCard";
import style from "./Favorites.module.css";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <main className={style.favorites_container}>
      <h2 className={style.favorites_title}>My favorite events ❤️</h2>

      {favorites.length === 0 && (
        <p className={style.empty_message}>
          You haven't favorited any events yet.
        </p>
      )}

      <div className={style.favorites_list}>
        {favorites.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            event={event.name}
            linkImage={event.linkImage}
            location={event.location}
            date={event.date}
            type={event.type}
          />
        ))}
      </div>
    </main>
  );
}
