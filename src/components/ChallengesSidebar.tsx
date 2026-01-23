import React from 'react';

const ChallengesSidebar = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row-reverse',
      height: '100%',
      marginLeft: '-10px',
      marginRight: '10px',
      paddingRight: '30px',
      backgroundColor: '#f0f0f0',
    }}>
      <div style={{
        width: '90px',
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
        Challenges
      </h1>
      </div>
      <div style={{ 
        width: '20px',
        borderRight: 'none',
      }}></div>
    </div>
  );
};

export default ChallengesSidebar;
