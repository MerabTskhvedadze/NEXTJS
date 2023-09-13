import { DUMMY_EVENTS } from "@/mocks/mock_events";

export function getEventById(id: string) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
