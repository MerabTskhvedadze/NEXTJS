import {
  EventSummary,
  EventLogistics,
  EventContent,
} from "@/components/event-detail";
import { getEventById } from "@/utils";
import { useRouter } from "next/router";

export default function EventDetailPage() {
  const { query } = useRouter();
  const event = getEventById(query.eventId as string);

  if (!event) {
    return <h1>Event not found!</h1>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
