import "./App.css";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./pages/Dashboard";
import Vasche from "./pages/Vasche";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout-main">
        <TopBar />

        <main className="layout-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/vasche" element={<Vasche />} />

            {/* In arrivo */}
            <Route path="/lotti" element={<div>Lotti</div>} />
            <Route path="/analisi" element={<div>Analisi</div>} />
            <Route path="/imbottigliamenti" element={<div>Imbottigliamenti</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
