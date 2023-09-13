import { EventList } from "@/components/events";
import { getFilteredEvents } from "@/utils";
import { useRouter } from "next/router";

export default function FilteredEventsPage() {
  const currentDate = new Date();
  const lastMonth = 12;

  const {
    query: { slug },
  } = useRouter();

  let filteredEvents;
  if (slug) {
    filteredEvents = getFilteredEvents(Number(slug[0]), Number(slug[1]));
  }

  if (!filteredEvents) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl text-green-600">Events Not Found</h1>
      </div>
    );
  }

  return <div>{filteredEvents && <EventList items={filteredEvents} />}</div>;
}
