import style from "./EventList.module.css";
import EventCard from "../event_card/EventCard";

export default function EventList({events, onEventClick, type}) {
    return (
        <div className={style.event_list_container}>
            <h3>{type}</h3>
            {events.map((event, i) => (
                <EventCard 
                    key={i}
                    event={event.name}
                    linkImage={event.linkImage}
                    local={event.local}
                    date={event.date}
                    type={event.type}
                    onClick={onEventClick}
                />
            ))}
        </div>
    )
}