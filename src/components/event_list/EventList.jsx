import style from "./EventList.module.css";
import EventCard from "../event_card/EventCard";

export default function EventList({events, onEventClick}) {
    return (
        <div className={style.event_list_container}>
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