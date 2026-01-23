import Header from "@/components/Header";
import Scoreboard from "@/components/Scoreboard";
import Sidebar from "@/components/Sidebar";
import RightPanel from "@/components/RightPanel";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left Sidebar */}
        <Sidebar text="Scoreboard" side="left" />
        
        {/* Main Content */}
        <main style={{ flex: 2, borderRight: '1px solid #000', overflow: 'hidden' }}>
          <Scoreboard />
        </main>

        {/* Right Panel */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <RightPanel />
        </div>

        {/* Right Sidebar */}
        <Sidebar text="Challenges" side="right" />
      </div>
    </div>
  );
}
