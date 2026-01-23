'use client';

import React, { useState } from 'react';

const Header = () => {
  const [golIndex, setGolIndex] = useState(0);
  const golGifs = ['/img/gol_part_1.gif', '/img/gol_part_2.gif', '/img/gol_part_3.gif' , '/img/gol_part_4.gif'];

  const handleGolClick = () => {
    setGolIndex((prev) => (prev + 1) % golGifs.length);
  };

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 1rem',
      height: '14.2857142857vh',
      borderBottom: '1px solid #000',
      backgroundColor: '#f0f0f0',
      fontFamily: "'Unifont', monospace",
      fontSize: '1.2rem'
    }}>
      {/* Left: Flag and Login Status */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', height: '100%' , marginLeft: '2rem'}}>
        <img 
          src="/img/FlagWave.gif" 
          alt="Logo" 
          style={{ 
            height: '70%', 
            imageRendering: 'pixelated' 
          }} 
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'red', fontSize: '0.9rem' }}>[ Not logged in ]</span>
        </div>
      </div>

      {/* Center: Decorative Pattern - Game of Life GIF */}
      <div 
        style={{ 
          display: 'flex', 
          
          alignItems: 'center', 
          padding: '2px',
          cursor: 'pointer',
          height: 'calc(100% - 4px)'
        }}
        onClick={handleGolClick}
      >
        <img 
          src={golGifs[golIndex]} 
          alt="Game of Life" 
          style={{ 
            height: '100%',
            imageRendering: 'pixelated'
          }} 
        />
      </div>

      {/* Right: Announcements and Timer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', height: '100%' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          borderLeft: '1px solid #000', 
          borderRight: '1px solid #000', 
          padding: '5px 10px', 
          height: 'calc(100% - 20px)',
          position: 'relative'
        }}>
          {/* Small top border on left */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '8px',
            borderTop: '1px solid #000'
          }} />
          {/* Small top border on right */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '8px',
            borderTop: '1px solid #000'
          }} />
          {/* Small bottom border on left */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '8px',
            borderBottom: '1px solid #000'
          }} />
          {/* Small bottom border on right */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '8px',
            borderBottom: '1px solid #000'
          }} />
          <img 
            src="/img/announcement.png" 
            alt="Announcements" 
            style={{ 
              height: '25%', 
              imageRendering: 'pixelated' 
            }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1', justifyContent: 'center', fontFamily: "'Unifont', monospace" }}>
            <span style={{ fontSize: '0.8rem' }}>ANNOUNCEMENTS</span>
            <span>(13)</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: '1', justifyContent: 'center', height: '100%' }}>
          <span style={{ fontSize: '1.5rem' }}>CTF Closed</span>
          <span style={{ fontSize: '0.9rem' }}>23/01/2026</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
