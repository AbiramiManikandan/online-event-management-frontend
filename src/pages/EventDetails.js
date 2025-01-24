import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchEventDetails } from "../services/eventService";
import TicketForm from "../components/TicketForm";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEventDetails(id).then(setEvent).catch(console.error);
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p>{event.date} - {event.location}</p>
      <p>{event.description}</p>
      <TicketForm eventId={event._id} />
    </div>
  );
};

export default EventDetails;
