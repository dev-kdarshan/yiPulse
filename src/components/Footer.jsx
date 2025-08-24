import React from "react";
import "../styles/footer.css";

function Footer() {

  const linkToAuthor = process.env.REACT_APP_YIWEB_AUTHOR;

  return (
    <footer className="yi-footer" style={{ fontSize: "14px" }}>
      © {new Date().getFullYear()} for Young Indians, developed by - <a className="authorVisit" href={linkToAuthor} target="_blank">darshan khute</a>
    </footer>
  );
}

export default Footer;