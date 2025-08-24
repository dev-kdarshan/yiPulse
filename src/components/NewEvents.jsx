import React from "react";
import "../styles/newEvents.css";

function NewEvents({ onClick }) {
  return (
    <div className="my-4">
      <a onClick={ onClick } className="btn btn-primary w-100">
        View New Events <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  );
}

export default NewEvents;