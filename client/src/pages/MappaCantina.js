import { useEffect, useState } from "react";

function MappaCantina() {
  const [vasche, setVasche] = useState([]);

  useEffect(() => {
    async function fetchVasche() {
      try {
        const response = await fetch("http://localhost:5000/api/vasche");
        const data = await response.json();
        setVasche(data);
      } catch (error) {
        console.error("Errore caricamento vasche:", error);
      }
    }

    fetchVasche();
  }, []);

  function getColor(stato) {
    switch (stato) {
      case "Fermentazione":
        return "#ef4444"; // rosso
      case "Affinamento":
        return "#3b82f6"; // blu
      case "Vuota":
        return "#22c55e"; // verde
      default:
        return "#e5e7eb"; // grigio
    }
  }

  return (
    <div className="page">
      <h2>Mappa Cantina</h2>
      <p>Vista interattiva delle vasche</p>

      <div className="cantina-map">
        <svg width="800" height="500" viewBox="0 0 800 500">

          {/* Esempio: sfondo della cantina */}
          <rect x="0" y="0" width="800" height="500" fill="#111827" />

          {/* Disegno vasche direttamente da database */}
          {vasche.map((v, i) => (
            <g key={v.id}>
              <rect
                x={100 + i * 150}
                y={200}
                width="80"
                height="120"
                fill={getColor(v.stato)}
                stroke="#fff"
                strokeWidth="2"
                rx="10"
              />
              <text
                x={140 + i * 150}
                y={260}
                fill="#fff"
                fontSize="14"
                textAnchor="middle"
              >
                {v.codice}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

export default MappaCantina;
