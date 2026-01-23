import React from 'react';

interface Team {
  rank: number;
  name: string;
  flags: number;
  score: number;
  isUserTeam?: boolean;
}

const mockTeams: Team[] = [
  { rank: 1, name: 'Friendly Maltese Citizens', flags: 30, score: 7659, isUserTeam: true },
  { rank: 2, name: 'Kalmarunionen', flags: 28, score: 6903 },
  { rank: 3, name: 'SLICES', flags: 28, score: 6520 },
  { rank: 4, name: 'Zer0RocketWrecks', flags: 27, score: 6509 },
  { rank: 5, name: 'DiceGang', flags: 26, score: 6256 },
  { rank: 6, name: 'FluxKittens :3', flags: 25, score: 5968 },
  { rank: 7, name: 'Maple Mallard Magistrates', flags: 25, score: 5879 },
  { rank: 8, name: 'Stockholm Syndrome', flags: 25, score: 5793 },
  { rank: 9, name: 'kijitora', flags: 24, score: 5539 },
  { rank: 10, name: 'pasten', flags: 23, score: 5426 },
  { rank: 11, name: 'C4T BuT S4D', flags: 24, score: 5345 },
  { rank: 12, name: 'GMD Ierae', flags: 23, score: 5183 },
  { rank: 13, name: 'Blue Water', flags: 22, score: 4883 },
  { rank: 14, name: 'JustCatTheFish', flags: 21, score: 4803 },
  { rank: 15, name: 'r3kapig', flags: 21, score: 4538 },
  { rank: 16, name: 'MEPhI CTF', flags: 20, score: 4284 },
  { rank: 17, name: 'KUK Hofhackerei', flags: 19, score: 4254 },
];

const Scoreboard = () => {
  return (
    <div style={{ padding: '20px', paddingLeft: '10px', height: '100%', overflowY: 'auto' }}>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        fontFamily: "'Unifont', monospace",
        fontSize: '1.1rem'
      }}>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th style={{ padding: '5px', border: '1px solid #000', backgroundColor: '#e0e0e0', width: '50px' }}>PLACE</th>
            <th style={{ padding: '5px', border: '1px solid #000', borderLeft: 'none', borderRight: 'none', backgroundColor: '#e0e0e0' }}>NAME</th>
            <th style={{ padding: '5px', border: '1px solid #000', backgroundColor: '#e0e0e0', width: '150px', textAlign: 'center' }}>FLAGS CAPTURED</th>
            <th style={{ padding: '5px', border: '1px solid #000', backgroundColor: '#e0e0e0', width: '100px', textAlign: 'right' }}>SCORE</th>
          </tr>
        </thead>
        <tbody>
          {mockTeams.map((team) => (
            <tr 
              key={team.rank} 
              style={{ 
                backgroundColor: team.isUserTeam ? '#AFEC33' : 'transparent',
                height: '30px'
              }}
            >
              <td style={{ padding: '5px 10px' }}>{team.rank}</td>
              <td style={{ padding: '5px 10px' }}>{team.name}</td>
              <td style={{ padding: '5px 10px', textAlign: 'center' }}>{team.flags}</td>
              <td style={{ padding: '5px 10px', textAlign: 'right' }}>{team.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
