import React, { useEffect, useState } from "react";
import "../styles/socialLinks.css";

function SocialLinks() {
  const [socialLinks, setSocialLinks] = useState({});
  const yiSocials = process.env.REACT_APP_YI_SHEET_MYDETAILS;

  useEffect(() => {
    fetch(yiSocials)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setSocialLinks(data[0]);
        }
      })
      .catch((err) => console.error("Error fetching social links:", err));
  }, [yiSocials]);

  return (
    <div className="d-flex justify-content-center gap-3 my-3">
      {/* Instagram Button */}
      {socialLinks.instagram ? (
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noreferrer"
          className="btn-soft"
        >
          <i className="bi bi-instagram"></i> Instagram
        </a>
      ) : (
        <span className="btn-soft disabled">
          <i className="bi bi-instagram"></i> Instagram
        </span>
      )}

      {/* LinkedIn Button */}
      {socialLinks.linkedin ? (
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          className="btn-soft"
        >
          <i className="bi bi-linkedin"></i> LinkedIn
        </a>
      ) : (
        <span className="btn-soft disabled">
          <i className="bi bi-linkedin"></i> LinkedIn
        </span>
      )}
    </div>
  );
}

export default SocialLinks;
