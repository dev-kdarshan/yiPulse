import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../styles/announcements.css";

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const listRef = useRef(null);
  const animationRef = useRef(null);
  const yiAnnouncements = process.env.REACT_APP_YI_SHEET_ANNOUNCEMENTS;

  const fetchAnnouncements = async () => {
    try {
      const res = await fetch(yiAnnouncements );
      const data = await res.json();

      const filtered = data
        .map(row => row.announcement)
        .filter(text => text && text.trim() !== "");

      setAnnouncements(filtered);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching announcements:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
    const interval = setInterval(fetchAnnouncements, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (announcements.length > 0 && listRef.current) {
      const list = listRef.current;
      const itemHeight = list.children[0].offsetHeight;
      const totalItems = list.children.length;
      
      animationRef.current?.kill();

      animationRef.current = gsap.to(list, {
        y: -itemHeight * totalItems / 2, 
        duration: totalItems, 
        ease: "none",
        repeat: -1,
      });
    }
  }, [announcements]);

  return (
    <div className="my-4">
      <h5>Announcements</h5>
      <div className="announcement-container">
        {loading ? (
          <p>Loading announcements...</p>
        ) : announcements.length === 0 ? (
          <p>No announcements at the moment.</p>
        ) : (
          <ul ref={listRef} className="announcement-list">
            {[...announcements, ...announcements].map((item, index) => ( 
              <li key={index} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Announcements;
