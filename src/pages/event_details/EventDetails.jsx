import { useParams } from "react-router-dom";
import { useContext } from "react";
import { EventsContext } from "../../contexts/events/EventsContext";
import { FavoritesContext } from "../../contexts/favorites/FavoritesContext";
import style from "./EventDetails.module.css";

export default function EventDetails() {
  const { id } = useParams();
  const { events } = useContext(EventsContext);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const event = events[id];

  if (!event) return <p>Evento não encontrado.</p>;

  const isFavorite = favorites.some((fav) => fav.id === event.id);

  return (
    <div className={style.details_container}>
      <h2>{event.name}</h2>

      <img src={event.linkImage} alt={event.name} className={style.details_image} />

      <p><strong>Data:</strong> {event.date}</p>
      <p><strong>Local:</strong> {event.local}</p>
      <p><strong>Categoria:</strong> {event.type}</p>

      <button onClick={() => toggleFavorite(event)} className={style.favorite_btn}>
        {isFavorite ? "❤️ Remover dos Favoritos" : "🤍 Favoritar"}
      </button>
    </div>
  );
}
