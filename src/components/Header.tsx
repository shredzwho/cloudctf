import React from 'react';

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 1rem',
      height: '60px',
      borderBottom: '1px solid #000',
      backgroundColor: '#f0f0f0',
      fontFamily: "'VT323', monospace",
      fontSize: '1.2rem'
    }}>
      {/* Left: Flag and Login Status */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ fontSize: '2rem' }}>🏁</div> {/* Replace with actual flag SVG if available */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: 'red', fontSize: '0.9rem' }}>[ Not logged in ]</span>
        </div>
      </div>

      {/* Center: Decorative Pattern */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        border: '1px solid #000',
        padding: '5px',
        backgroundColor: '#fff'
      }}>
        <div style={{ display: 'flex', gap: '2px' }}>
          {/* Simple pixel pattern simulation */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{ width: '10px', height: '10px', backgroundColor: i % 2 === 0 ? '#000' : '#fff' }} />
          ))}
        </div>
      </div>

      {/* Right: Announcements and Timer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #000', padding: '5px 10px' }}>
          <span>✖</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1' }}>
            <span style={{ fontSize: '0.8rem' }}>ANNOUNCEMENTS</span>
            <span>(13)</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', lineHeight: '1' }}>
          <span style={{ fontSize: '1.5rem' }}>CTF Closed</span>
          <span style={{ fontSize: '0.9rem' }}>23/01/2026</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
