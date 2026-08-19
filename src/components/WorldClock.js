import React, { useEffect, useState } from "react";

const cities = [
  { city: "New York", zone: "America/New_York" },
  { city: "London", zone: "Europe/London" },
  { city: "Dubai", zone: "Asia/Dubai" },
  { city: "New Delhi", zone: "Asia/Kolkata" },
  { city: "Singapore", zone: "Asia/Singapore" },
  { city: "Tokyo", zone: "Asia/Tokyo" },
  { city: "Sydney", zone: "Australia/Sydney" },
];

const formatTime = (date, timeZone) =>
  new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).formatToParts(date);

const formatDate = (date, timeZone) =>
  new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);

const TimeDisplay = ({ date, timeZone }) => {
  const parts = formatTime(date, timeZone);
  const time = parts
    .filter(({ type }) => type !== "dayPeriod")
    .map(({ value }) => value)
    .join("");
  const period = parts.find(({ type }) => type === "dayPeriod")?.value;

  return (
    <span className="clock-time-display">
      <span>{time}</span>
      <small>{period}</small>
    </span>
  );
};

const WorldClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedZone, setSelectedZone] = useState("Asia/Kolkata");

  useEffect(() => {
    const timer = window.setInterval(() => setCurrentTime(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const selectedCity = cities.find(({ zone }) => zone === selectedZone);

  return (
    <main className="container-fluid realtimecomp worldclockcomp">
      <div className="text-center tool-page-intro">
        <h1 className="card-head">World Clock</h1>
        <p>See the current time in cities around the world, live.</p>
      </div>

      <div className="worldclock-layout">
        <section className="worldclock-feature">
          <span className="live-indicator">Live now</span>
          <h2>{selectedCity.city}</h2>
          <div className="worldclock-time">
            <TimeDisplay date={currentTime} timeZone={selectedZone} />
          </div>
          <p>{formatDate(currentTime, selectedZone)}</p>
          <label htmlFor="clockZone">Choose a city</label>
          <select
            id="clockZone"
            value={selectedZone}
            onChange={(event) => setSelectedZone(event.target.value)}
            className="form-select"
          >
            {cities.map(({ city, zone }) => (
              <option key={zone} value={zone}>
                {city}
              </option>
            ))}
          </select>
        </section>

        <section className="worldclock-list" aria-label="City times">
          {cities.map(({ city, zone }) => (
            <button
              type="button"
              className={`clock-city ${zone === selectedZone ? "active" : ""}`}
              key={zone}
              onClick={() => setSelectedZone(zone)}
            >
              <span>{city}</span>
              <strong>
                <TimeDisplay date={currentTime} timeZone={zone} />
              </strong>
            </button>
          ))}
        </section>
      </div>
    </main>
  );
};

export default WorldClock;
