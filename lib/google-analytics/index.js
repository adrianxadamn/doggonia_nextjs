export const pageview = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  })
}

// log specific events happening.
export const event = (eventType, eventCategory, eventLabel) => {
  window.gtag('event', eventType, {
    event_category: eventCategory,
    event_label: eventLabel,
   });
}