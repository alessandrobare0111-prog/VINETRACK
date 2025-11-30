import "./App.css";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

// Pagine
import Dashboard from "./pages/Dashboard";
import Vasche from "./pages/Vasche";
import Lotti from "./pages/Lotti";
import Analisi from "./pages/Analisi";
import Imbottigliamenti from "./pages/Imbottigliamenti";
import Tracciabilita from "./pages/Tracciabilita";
import MappaCantina from "./pages/MappaCantina";
import MappaVigneto from "./pages/MappaVigneto";

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
            <Route path="/lotti" element={<Lotti />} />
            <Route path="/analisi" element={<Analisi />} />
            <Route path="/imbottigliamenti" element={<Imbottigliamenti />} />
            <Route path="/tracciabilita" element={<Tracciabilita />} />
            <Route path="/mappa-cantina" element={<MappaCantina />} />
            <Route path="/mappa-vigneto" element={<MappaVigneto />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
