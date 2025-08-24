import React, { useEffect, useState } from "react";
import "../styles/header.css";
import yiLogo from "../assets/yiLogo.png";

function Header() {
  const [membershipLink, setMembershipLink] = useState(null);
  const yiMembership = process.env.REACT_APP_YI_SHEET_MYDETAILS;

  useEffect(() => {
    fetch(yiMembership)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setMembershipLink(data[0].membership);
        }
      })
      .catch((err) => console.error("Failed to fetch membership link:", err));
  }, [yiMembership]);

  return (
    <header className="text-center my-4">
      <img className="yi-logo-home" src={yiLogo} alt="Yi Logo" />
      <p className="yi-tagline">
        {membershipLink ? (
          <a href={membershipLink} target="_blank" rel="noopener noreferrer">
            click here to be a member!
          </a>
        ) : (
          <>click here to be a member!</>
        )}
      </p>
    </header>
  );
}

export default Header;
