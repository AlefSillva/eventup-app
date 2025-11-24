import { useState, useEffect } from "react";
import { EventsContext } from "./EventsContext";

export default function EventsProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
        .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar os eventos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <EventsContext.Provider value={{ events, setEvents, loading }}>
      {children}
    </EventsContext.Provider>
  );
}
