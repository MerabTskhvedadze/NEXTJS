import { LogisticsItem } from ".";
import { DateIcon, AddressIcon } from "../icons";

import { dateFormater, addressFormater } from "@/utils";

import classes from "./event-logistics.module.css";

type EventLogisticsProps = {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
};

export function EventLogistics({
  date,
  address,
  image,
  imageAlt,
}: EventLogisticsProps) {
  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{dateFormater(date)}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressFormater(address)}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}
