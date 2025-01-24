import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";
import { fetchEvents } from "../services/eventService";

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents).catch(console.error);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <SearchBar />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
