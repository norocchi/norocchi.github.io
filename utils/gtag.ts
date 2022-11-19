import { gaId } from "./const";
import type { Event } from "../types/ga";

export const pageview = (path: string) => {
  window.gtag("config", gaId, {
    page_path: path,
  });
};

export const trackEvent = ({action, category, label}: Event, value = "") => {
  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value: value,
  });
};
