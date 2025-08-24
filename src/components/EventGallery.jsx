import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import "../styles/eventGallery.css";

function EventGallery() {
  const [images, setImages] = useState([]);
  const eventgallerySheet = process.env.REACT_APP_YI_SHEET_EVENTIMAGES;

  useEffect(() => {
    axios
      .get(eventgallerySheet)
      .then((res) => {
        const validImages = res.data
          .map((row) => row.eventImage) 
          .filter((url) => url && url.trim() !== "");
        setImages(validImages);
      })
      .catch((err) => {
        console.error("Failed to fetch images from sheet:", err);
      });
  }, [eventgallerySheet]);

  return (
    <div className="my-4">
      <h5 className="text-center mb-3">Event Gallery</h5>

      {images.length === 0 ? (
        <p className="text-muted text-center">Loading gallery...</p>
      ) : (
        <Carousel controls={true} indicators={true} interval={2000} pause="hover">
          {images.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                src={img}
                className="d-block w-100 yi-gallery-img"
                alt={`Event ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default EventGallery;
