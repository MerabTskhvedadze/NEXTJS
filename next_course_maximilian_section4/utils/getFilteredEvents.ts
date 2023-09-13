import { DUMMY_EVENTS } from "@/mocks/mock_events";

export function getFilteredEvents(year: number, month: number) {
  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  if (filteredEvents.length <= 0) {
    return undefined;
  }
  return filteredEvents;
}
