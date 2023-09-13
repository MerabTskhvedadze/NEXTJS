import { useRouter } from "next/router";

import { EventList, EventsSearch } from "@/components/events";
import { getAllEvents } from "@/utils";

export default function EventsPage() {
  const router = useRouter();
  const allEvents = getAllEvents();

  const findEventsHandler = (year: string, month: string) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </>
  );
}
