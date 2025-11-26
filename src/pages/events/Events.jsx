import style from "./Events.module.css";
import EventList from "../../components/event_list/EventList";
import { useContext } from "react";
import { EventsContext } from "../../contexts/events/EventsContext";

export default function Events() {
  const { events, loading } = useContext(EventsContext);

  if (loading) return <p>Loading events...</p>;

  return (
    <main className={style.events_container}>
      <h2 className={style.events_title}>All events</h2>

      <EventList events={events} />
    </main>
  );
}
