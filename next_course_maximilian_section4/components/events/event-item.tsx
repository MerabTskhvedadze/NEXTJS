import { dateFormater, addressFormater } from "@/utils";
import { DateIcon, AddressIcon, ArrowRightIcon } from "../icons";
import { Button } from "../ui";

import classes from "./event-item.module.css";
import {} from "@/utils/addressFormater";

type EventItemProps = {
  image: string;
  title: string;
  date: string;
  location: string;
  id: string;
};

export default function EventItem({
  image,
  title,
  date,
  location,
  id,
}: EventItemProps) {
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{dateFormater(date)}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{addressFormater(location)}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
