import React, { useState } from 'react';
import { Info } from 'lucide-react';

function App() {
  const [showInfoModal, setShowInfoModal] = useState(false);

  const toggleInfoModal = () => {
    setShowInfoModal(!showInfoModal);
  };

  return (
    <div className="freedom-container">
      <div className="info-widget-container">
        <button onClick={toggleInfoModal} className="info-icon-button">
          <Info size={24} color="white" />
        </button>

        {showInfoModal && (
          <div className="info-modal-content">
            <h2 className="modal-title">About This Project</h2>
            <p className="modal-text"><strong>Author:</strong> Bowei Tombri</p>
            <p className="modal-text"><strong>Project:</strong><a href="https://github.com/Boweii22/Juneteenth-Freedom-Clock" target="_blank" rel="noopener noreferrer"> Juneteenth Freedom Clock</a></p>
            <p className="modal-text"><strong>Technologies:</strong> React, TypeScript, Vite, Tailwind CSS</p>
            <p className="modal-text">This project celebrates Juneteenth, commemorating the day the last enslaved people in the U.S. learned of their freedom. It features a dynamic clock with celestial animations and historical context.</p>
            <p className="modal-text"><a href="https://dev.to/challenges/frontend-2025-06-04" target="_blank" rel="noopener noreferrer">DEV Frontend Challenge</a></p>
            <button onClick={toggleInfoModal} className="modal-close-button">X</button>
          </div>
        )}
      </div>

      {/* Background layers */}
      <div className="sky-background"></div>
      <div className="stars-layer"></div>
      <div className="shooting-stars">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      
      {/* Main circular clock container */}
      <div className="clock-container">
        {/* Clock face with time markers */}
        <div className="clock-face">
          {/* Time markers */}
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="time-marker"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-210px)`,
              }}
            />
          ))}
          
          {/* Hour markers - proper 12-hour clock */}
          {[12, 3, 6, 9].map((hour) => (
            <div
              key={hour}
              className="hour-marker"
              style={{
                transform: `rotate(${hour === 12 ? 0 : hour * 30}deg) translateY(-240px)`,
              }}
            >
              <span style={{ transform: `rotate(${hour === 12 ? 0 : -hour * 30}deg)` }}>
                {hour}
              </span>
            </div>
          ))}
        </div>
        
        {/* Moving sun/moon celestial body */}
        <div className="celestial-container">
          <div className="celestial-body">
            {/* Sun */}
            <div className="sun">
              <div className="sun-core"></div>
              <div className="sun-glow"></div>
              <div className="sun-rays">
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className="sun-ray"
                    style={{
                      transform: `rotate(${i * 45}deg)`,
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Moon */}
            <div className="moon">
              <div className="moon-core"></div>
              <div className="moon-glow"></div>
              <div className="moon-craters">
                <div className="crater crater-1"></div>
                <div className="crater crater-2"></div>
                <div className="crater crater-3"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Freedom typography */}
        <div className="freedom-text-container">
          <h1 className="freedom-text">
            {'FREEDOM'.split('').map((letter, index) => (
              <span
                key={index}
                className="freedom-letter"
                style={{ animationDelay: `${2 + index * 0.3}s` }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <div className="freedom-subtitle">
            Celebrating Juneteenth
          </div>
          <div className="freedom-year">1865</div>
        </div>
        
        {/* Decorative clouds */}
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
        
        {/* Birds */}
        <div className="birds-container">
          <div className="bird bird-1">
            <div className="wing wing-left"></div>
            <div className="wing wing-right"></div>
          </div>
          <div className="bird bird-2">
            <div className="wing wing-left"></div>
            <div className="wing wing-right"></div>
          </div>
          <div className="bird bird-3">
            <div className="wing wing-left"></div>
            <div className="wing wing-right"></div>
          </div>
        </div>
        
        {/* Fireflies for nighttime */}
        <div className="fireflies">
          <div className="firefly firefly-1"></div>
          <div className="firefly firefly-2"></div>
          <div className="firefly firefly-3"></div>
          <div className="firefly firefly-4"></div>
          <div className="firefly firefly-5"></div>
        </div>
        
        {/* Aurora effect */}
        <div className="aurora aurora-1"></div>
        <div className="aurora aurora-2"></div>
      </div>
      
      {/* Historical context */}
      <div className="context-text">
        <p>June 19, 1865 - The Dawn of Freedom</p>
        <div className="context-subtitle">When the last enslaved people learned of their liberation</div>
      </div>
      
      {/* Progress indicator */}
      <div className="progress-container">
        <div className="progress-bar"></div>
        <div className="progress-text">Journey to Freedom</div>
      </div>
    </div>
  );
}

export default App;