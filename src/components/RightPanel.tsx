"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '0h', team1: 0, team2: 0, team3: 0 },
  { time: '2h', team1: 1000, team2: 800, team3: 500 },
  { time: '4h', team1: 1500, team2: 1200, team3: 1100 },
  { time: '6h', team1: 3000, team2: 2500, team3: 2000 },
  { time: '8h', team1: 4500, team2: 3000, team3: 2800 },
  { time: '10h', team1: 5000, team2: 4800, team3: 4500 },
  { time: '12h', team1: 6000, team2: 5500, team3: 5200 },
  { time: '14h', team1: 7659, team2: 6903, team3: 6520 },
];

const RightPanel = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', borderLeft: '1px solid #000' }}>
      {/* Top Teams Graph Section */}
      <div style={{ flex: 2, display: 'flex', flexDirection: 'column', borderBottom: '1px solid #000' }}>
        <div style={{ 
          padding: '5px 10px', 
          borderBottom: '1px solid #000', 
          backgroundColor: '#e0e0e0',
          fontSize: '0.9rem'
        }}>
          TOP TEAMS
        </div>
        <div style={{ padding: '10px', flex: 1, position: 'relative' }}>
          <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '0.8rem', color: '#666' }}>
            {'>'} Friendly Maltese Citizens
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="time" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Line type="monotone" dataKey="team1" stroke="#8884d8" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="team2" stroke="#82ca9d" strokeWidth={1} dot={false} />
              <Line type="monotone" dataKey="team3" stroke="#ffc658" strokeWidth={1} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Team Stats Section */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ 
          padding: '5px 10px', 
          borderBottom: '1px solid #000', 
          backgroundColor: '#e0e0e0',
          fontSize: '0.9rem'
        }}>
          TEAM STATS
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Friendly Maltese Citizens</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {/* Mock stats icons */}
            <div>φ P P P P P P</div>
            <div>? P P P P P</div>
            <div>* P P P P P P P</div>
            <div>« P P P P P P P</div>
            <div>@ P [] P P P P</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
