export function formatDate(date) {
  return new Intl.DateTimeFormat("da-DK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
