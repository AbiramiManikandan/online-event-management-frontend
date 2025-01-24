import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{event.title}</h3>
      <p>{event.date} - {event.location}</p>
      <p className="text-blue-600 font-semibold">${event.price}</p>
      <Link to={`/event/${event._id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
    </div>
  );
};

export default EventCard;
