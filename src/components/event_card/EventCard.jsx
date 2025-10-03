import style from "./EventCard.module.css";

export default function EventCard({
  event,
  linkImage,
  local,
  date,
  type,
  onClick,
}) {
  return (
    <div className={style.event_card_container} onClick={onClick}>
      <h4 className={style.event_card_title}>{event}</h4>
      <div className={style.event_card_image_container}>
        <img src={linkImage} alt={event} />
      </div>
      <div className={style.event_card_info_container}>
        <p className={style.event_card_date}>
          <span className={style.event_card_subtitle}>Data:</span> {date}
        </p>
        <p className={style.event_card_local}>
          <span className={style.event_card_subtitle}>Local:</span> {local}
        </p>
        <p className={style.event_card_type}>
          <span className={style.event_card_subtitle}>Categoria:</span>  {type}
        </p>
      </div>
    </div>
  );
}
