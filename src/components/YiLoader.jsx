import React, { useEffect, useRef } from 'react';
import '../styles/YiLoader.css';
import { gsap } from 'gsap';

const YiLoader = () => {
  const statements = useRef([]);
  const yiLogo = useRef(null);
  const flagStripes = useRef([]);
  const yiText = useRef(null);
  const bottomBlocks = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1️⃣ Sequential statements
    statements.current.forEach((statement, i) => {
      tl.to(statement, { opacity: 1, y: 0, duration: 0.5 });
      tl.to(statement, { opacity: 0, y: -20, duration: 0.5, delay: 0.3 });
    });

    // 2️⃣ Show Yi logo, text, and bottom blocks together
    tl.to([yiLogo.current, yiText.current, ...bottomBlocks.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      onStart: () => {
        // Start flag stripes animation once visible
        flagStripes.current.forEach((stripe, i) => {
          gsap.to(stripe, {
            y: -10,
            opacity: 1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            duration: 1 + i * 0.2,
            delay: i * 0.1
          });
        });
      }
    });

  }, []);

  return (
    <div className="yi-loader">
      {/* 3 Statements */}
      <div className="statements">
        {["Inspiring Change", "Building Leaders", "Creating Impact"].map((text, i) => (
          <div
            key={i}
            className="statement"
            style={{ opacity: 0, transform: 'translateY(20px)' }}
            ref={el => statements.current[i] = el}
          >
            {text}
          </div>
        ))}
      </div>

      {/* Yi Logo */}
      <div className="yi-logo" ref={yiLogo} style={{ opacity: 0, transform: 'translateY(20px)' }}>
        <span className="yi-y">Y</span>
        <span className="yi-i">
          {["orange", "white", "green"].map((color, i) => (
            <span
              key={i}
              className={`flag-stripe ${color}`}
              ref={el => flagStripes.current[i] = el}
            />
          ))}
          <span className="whitebase" />
        </span>
      </div>

      {/* Yi Text */}
      <div className="yi-text" ref={yiText} style={{ opacity: 0, transform: 'translateY(20px)' }}>Young Indians</div>

      {/* Bottom Blocks */}
      <div className="yi-bottom">
        {["WE CAN", "WE WILL"].map((text, i) => (
          <div
            key={i}
            className={`bottom-block ${i === 0 ? 'orange' : 'green'}`}
            ref={el => bottomBlocks.current[i] = el}
            style={{ opacity: 0, transform: 'translateY(20px)' }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YiLoader;
