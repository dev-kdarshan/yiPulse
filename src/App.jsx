import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import EventGallery from "./components/EventGallery";
import Annoucements from "./components/Annoucements";
import NewEvents from "./components/NewEvents";
import FloatingContact from "./components/FloatingContact";
import Footer from "./components/Footer";
import EventGrid from "./components/EventGrid";
import YiLoader from "./components/YiLoader";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [loading, setLoading] = useState(true); 
  const hasLogged = useRef(false);

  useEffect(() => {
  const timer = setTimeout(() => {
      setLoading(false);
  }, 9000); 

    if (!hasLogged.current) {
      hasLogged.current = true;

      console.log(
        "%cYi Pulse Platform - Developed by Darshan Khute\n" +
          "%cA dynamic and responsive portal for Young Indians (Yi) KBTCOE\n\n" +
          "%cTech Stack:\n" +
          "React.js | Gsap.js | Bootstrap | Google Sheets as Headless CMS\n\n" +
          "%cAbout Me:\n" +
          "Portfolio: https://portfolio-darshankhute.netlify.app/\n" +
          "Instagram : https://www.instagram.com/hoyydarshann.16/\n" +
          "LinkedIn : www.linkedin.com/in/darshan-khute\n" +
          "Email    : darshankhute2215@gmail.com\n\n" +
          "%cCurious minds are always welcome. Explore. Build. Grow.",
        "color: #1f6feb; font-size: 16px; font-weight: bold;",
        "color: #8b949e; font-size: 13px;",
        "color: #58a6ff; font-size: 13px; font-weight: bold;",
        "color: #c9d1d9; font-size: 13px;",
        "color: #6e7681; font-size: 12px; font-style: italic;"
      );
    }


  return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <YiLoader />;
  }

  const handleButtonClick = () => {
    setShowCard(true); 
  };

  return (
    <div className="parent">
      <div className="container">
        <div className="top">
          <div className="top-content">
            <Header />
            <SocialLinks />
          </div>
        </div>

        {/* Bottom section */}
        <div className="bottom">
          {showCard ? (
            <EventGrid onBack={() => setShowCard(false)} />  
          ) : (
            <div className="bottom-content">
              <EventGallery />
              <Annoucements />
              <NewEvents onClick={handleButtonClick} />
            </div>
          )}
        </div>

        <Footer />
        <FloatingContact />
      </div>
    </div>
  );
}

export default App;
