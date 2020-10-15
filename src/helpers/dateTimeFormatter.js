// array of months in human readable strings
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

/**
 * Formats a integer timestamp to human readable
 * date time
 * @param {number} timestamp
 * @param {Object} config
 * @returns {string} human readable formatted string
 */
export const dateTimeFormatter = (timestamp, config = {}) => {
  // create js date object from the timestamp
  const _timestamp = new Date(timestamp)

  // extract informations
  const year = _timestamp.getFullYear()
  const month = _timestamp.getMonth()
  const date = _timestamp.getDate()
  const day = _timestamp.getDay()
  const hour = _timestamp.getHours()
  const minute = _timestamp.getMinutes()
  const hourAs12 = hour % 12
  const isPm = hour >= 12

  // create the formatted string
  const formattedTime = `${config.day ? `${DAYS[day]}, ` : ""}${
    MONTHS[month]
  } ${date}, ${year}, ${hourAs12
    .toString()
    .padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${
    isPm ? "PM" : "AM"
  }`

  return formattedTime
}
