import { EventList } from "@/components/events/event-list";
import { getFeaturedEvents } from "@/utils";

export default function HomePage() {
  const events = getFeaturedEvents();

  return <EventList items={events} />;
}
