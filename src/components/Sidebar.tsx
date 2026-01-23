import React from 'react';

interface SidebarProps {
  text: string;
  side: 'left' | 'right';
}

const Sidebar = ({ text, side }: SidebarProps) => {
  return (
    <div style={{
      width: '60px',
      height: '100%',
      backgroundColor: '#f0f0f0',
      borderRight: side === 'left' ? '1px solid #000' : 'none',
      borderLeft: side === 'right' ? '1px solid #000' : 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <h1 style={{
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        transform: 'rotate(180deg)',
        fontSize: '4rem',
        margin: 0,
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',
        letterSpacing: '5px'
      }}>
        {text}
      </h1>
    </div>
  );
};

export default Sidebar;
