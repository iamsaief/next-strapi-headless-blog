/**
 * Converts timestamp to readable format
 * @param {string} inputTimestamp
 * @param {boolean} hasWeekday
 * @returns string
 */
export function formatTimestamp(inputTimestamp, hasWeekday) {
  // Create a new Date object from the input timestamp
  const date = new Date(inputTimestamp);

  // Define options for formatting
  let options;
  if (hasWeekday) {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else {
    options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  }

  // Format the date using toLocaleDateString
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}
