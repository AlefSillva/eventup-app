import style from "./Main.module.css";
import EventList from "../event_list/EventList";
import { useContext } from "react";
import { EventsContext } from "../contexts/events/EventsContext";


export default function Main({ onEventClick }) {
  const { events, loading } = useContext(EventsContext);

  if (loading) return <p>Carregando eventos...</p>;

  return (
    <main className={style.main_container}>
      <div className={style.main_description}>
        <span className={style.main_highlight_description1}>Organize</span>
        <span className={style.main_highlight_description2}>Descubra</span>
        <span className={style.main_highlight_description3}>Participe</span>
      </div>
      <h2 className={style.main_title}>Descubra Seu Próximo Evento</h2>

      <EventList events={events} onEventClick={onEventClick} />
    </main>
  );
}
