import React, { useEffect, useState } from "react";
import "../styles/floatingContact.css";

function FloatingContact() {
  const [gmailLink, setGmailLink] = useState("");
  const yiContact = process.env.REACT_APP_YI_SHEET_MYDETAILS;

  useEffect(() => {
    fetch(yiContact)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setGmailLink(data[0].gmail);
        }
      })
      .catch((err) => console.error("Error fetching Gmail link:", err));
  }, [yiContact]);

  return (
    <a
      href={gmailLink || "#"}
      className="yi-contact-fab"
      target="_blank"
      rel="noreferrer"
    >
      <i className="bi bi-envelope-at-fill"></i>
    </a>
  );
}

export default FloatingContact;
