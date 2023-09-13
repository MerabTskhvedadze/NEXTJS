import EventItem from "./event-item";

import classes from "./event-list.module.css";

type EventListProps = {
  items: {
    image: string;
    title: string;
    date: string;
    location: string;
    id: string;
  }[];
};

export function EventList({ items }: EventListProps) {
  return (
    <ul className={classes.list}>
      {items.map(({ image, title, date, location, id }) => {
        return (
          <EventItem
            key={id}
            image={image}
            title={title}
            date={date}
            location={location}
            id={id}
          />
        );
      })}
    </ul>
  );
}
