import React, { useState, useEffect } from "react";
import "../styles/eventGrid.css";

function EventGrid({ onBack }) {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const yiEvents = process.env.REACT_APP_YI_SHEET_EVENTGRID;

  const fetchEvents = async () => {
    try {
      const res = await fetch(yiEvents);
      const data = await res.json();

      const filtered = data.filter(event => event.name && event.name.trim() !== "");
      setEventsData(filtered);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching events:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(); 
    const interval = setInterval(fetchEvents, 60000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="events-parent">
      <div className="backBtn-holder">
        <button className="back-btn" onClick={onBack}>
          <i className="bi bi-arrow-left"></i> Back
        </button>
      </div>

      {loading ? (
        <p className="loading-msg">Loading events...</p>
      ) : eventsData.length === 0 ? (
        <p className="no-events">There are no events at the moment.</p>
      ) : (
        <div className="events-container">
          {eventsData.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt={event.name} className="event-image" />
              <div className="event-details">
                <h3>{event.name}</h3>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <button className="register-btn"><a href={event.register}>Register</a></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EventGrid;
