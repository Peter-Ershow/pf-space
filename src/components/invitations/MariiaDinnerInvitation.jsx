import React from 'react';
import './MariiaDinnerInvitation.css';

const MariiaDinnerInvitation = () => {
  return (
    <div className="invitation-page">
      <div className="invitation-container">
        <div className="floating-elements">
          <div className="float-element">🎓</div>
          <div className="float-element">🌟</div>
          <div className="float-element">🎉</div>
          <div className="float-element">🥳</div>
        </div>
        
        <div className="header">
          <div className="graduation-cap">🎓</div>
          <div className="celebration-title">Graduation Celebration</div>
          <div className="subtitle">Join us for our special dinner</div>
        </div>
        
        <div className="content">
          <div className="honoree-section">
            <div className="honoree-name">Mariia Movchan</div>
            <div className="achievement">Peter has achieved this incredible milestone thanks to you!</div>
          </div>
          
          <div className="celebration-text">
            You are cordially invited to celebrate this remarkable achievement with us, because the main achievement in Peter's life is YOU.
            Let's gather to honor Peter's dedication, hard work, and success as he embarks on his next chapter together with his bulochka who is the best person in the world!.
          </div>
          
          <div className="decorative-border"></div>
          
          <div className="event-details">
            <div className="detail-item">
              <div className="detail-icon">📅</div>
              <div className="detail-text">
                <strong>Date:</strong> Friday, July 18th, 2025
              </div>
            </div>
            
            <div className="detail-item">
              <div className="detail-icon">⏰</div>
              <div className="detail-text">
                <strong>Time:</strong> 20:00 (8:00 PM)
              </div>
            </div>
            
            <div className="detail-item">
              <div className="detail-icon">📍</div>
              <div className="detail-text">
                <strong>Location:</strong> Peter and Mariia's House
              </div>
            </div>
            
            <div className="detail-item">
              <div className="detail-icon">🍽️</div>
              <div className="detail-text">
                <strong>Occasion:</strong> Graduation Ceremony Dinner
              </div>
            </div>
          </div>
          
          <div className="quote">
            "The future belongs to those who believe in the beauty of their dreams." 
            <br />— Eleanor Roosevelt
          </div>
          
          <div className="rsvp-section">
            <div className="rsvp-text">
              Please RSVP to Peter: 015756551428
            </div>
            <div style={{ fontSize: '0.9rem', color: '#636e72', marginTop: '10px' }}>
              <strong>RSVP by today</strong> • We can't wait to celebrate with you! 🎉
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MariiaDinnerInvitation;