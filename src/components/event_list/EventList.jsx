import style from "./EventList.module.css";
import EventCard from "../event_card/EventCard";

export default function EventList({events}) {
    return (
        <div className={style.event_list_container}>
            {events.map((event) => (
                <EventCard 
                    key={event.id}
                    id={event.id}
                    event={event.name}
                    linkImage={event.linkImage}
                    date={event.date}
                    type={event.type}
                />
            ))}
        </div>
    )
}