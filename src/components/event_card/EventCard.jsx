import style from "./EventCard.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FavoritesContext } from "../../contexts/favorites/FavoritesContext";

export default function EventCard({ id, event, linkImage, location, date, type }) {
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
  const navigate = useNavigate();

  const eventObject = {
    id,
    name: event,
    linkImage,
    location,
    date,
    type,
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(eventObject);
  };

  const openDetails = () => {
    navigate(`/event/${id}`);
  };

  return (
    <div className={style.event_card_container} onClick={openDetails}>
      <h4 className={style.event_card_title}>{event}</h4>

      <div className={style.event_card_image_container}>
        <img src={linkImage} alt={event} />
      </div>

      <div className={ style.event_card_info_container}>
        <div className={style.event_card_info}>
          <p>
            <span className={style.card_label}>Date:</span> {date}
          </p>
            
          <p>
            <span className={style.card_label}>Category:</span> {type}
          </p>
        </div>
        <button className={style.favorite_button} onClick={handleFavoriteClick}>
          {isFavorite(id) ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
