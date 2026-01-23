import React from 'react';

const ScoreboardSidebar = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      marginLeft: '10px',
      marginRight: '-10px',
      paddingRight: '20px',
      backgroundColor: '#f0f0f0',
    }}>
      <div style={{
        width: '120px',
        height: '100%',
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
        letterSpacing: '5px',
        marginLeft: '0px'

      }}>
        Scoreboard
      </h1>
      </div>
      <div style={{ 
        width: '20px',
        borderRight: '1px solid #000',
      }}></div>
    </div>
  );
};

export default ScoreboardSidebar;
