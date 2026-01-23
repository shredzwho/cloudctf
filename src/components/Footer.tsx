import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '2rem',
      textAlign: 'center',
      borderTop: '1px solid #ccc',
      marginTop: 'auto',
      fontFamily: "'VT323', monospace",
      color: '#666'
    }}>
      <p>&copy; 2026 Google CTF. All rights reserved.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Rules</a>
      </div>
    </footer>
  );
};

export default Footer;
