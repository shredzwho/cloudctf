import Header from "@/components/Header";
import Scoreboard from "@/components/Scoreboard";
import ScoreboardSidebar from "@/components/ScoreboardSidebar";
import ChallengesSidebar from "@/components/ChallengesSidebar";
import RightPanel from "@/components/RightPanel";
import DownPanel from "@/components/DownPanel";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Left Sidebar */}
          <ScoreboardSidebar />
          
          {/* Main Content */}
          <main style={{ flex: 2, borderRight: '1px solid #000', overflow: 'hidden' }}>
            <Scoreboard />
          </main>

          {/* Right Panel */}
          <div style={{ flex: 1, overflow: 'hidden', marginRight: '20px', borderRight: '1px solid #000' }}>
            <RightPanel />
          </div>

          {/* Right Sidebar */}
          <ChallengesSidebar />
        </div>
        
        {/* Down Panel - spans below both Scoreboard and Top Teams */}
        <DownPanel />
      </div>
    </div>
  );
}
