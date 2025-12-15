import "./Travaso.css";
import TuboTravaso from "../components/TuboTravaso";
import { useState } from "react";

export default function Travaso() {
  const [attivo, setAttivo] = useState(false);

  return (
    <div className="travaso-page">
      <h1>Travaso</h1>
      <p className="page-subtitle">
        Trasferimento vino tra vasche
      </p>

      <button
        onClick={() => setAttivo(!attivo)}
        style={{
          marginTop: 20,
          padding: "10px 18px",
          borderRadius: 8,
          background: "#7c2d12",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {attivo ? "Ferma travaso" : "Avvia travaso"}
      </button>

      <div className="travaso-layout">
        <div className="vasca-box">
          <h3>Vasca sorgente</h3>
          <div className="vasca-dato">Nome: Vasca 01</div>
          <div className="vasca-dato">Lotto: Sangiovese 2024</div>
          <div className="vasca-dato">Volume: 45 hl</div>
        </div>

        <TuboTravaso attivo={attivo} />

        <div className="vasca-box">
          <h3>Vasca destinazione</h3>
          <div className="vasca-dato">Nome: Vasca 04</div>
          <div className="vasca-dato">Stato: Vuota</div>
          <div className="vasca-dato">Capacità: 60 hl</div>
        </div>
      </div>
    </div>
  );
}
