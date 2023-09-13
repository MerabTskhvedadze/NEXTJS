import { DUMMY_EVENTS } from "@/mocks/mock_events";

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}
