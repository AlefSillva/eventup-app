import style from "./Home.module.css";
import EventList from "../../components/event_list/EventList";
import { useContext } from "react";
import { EventsContext } from "../../contexts/events/EventsContext";

export default function Home({ onEventClick }) {
  const { events, loading } = useContext(EventsContext);

  if (loading) return <p>Loading events...</p>;

  return (
    <main className={style.home_container}>
      <div className={style.home_description}>
        <span className={style.home_highlight_description1}>Organize</span>
        <span className={style.home_highlight_description2}>Discover</span>
        <span className={style.home_highlight_description3}>Participate</span>
      </div>
      <h2 className={style.home_title}>Discover Your Next Event</h2>

      <EventList events={events} onEventClick={onEventClick} />
    </main>
  );
}
