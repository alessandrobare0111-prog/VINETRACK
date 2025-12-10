// /src/components/VascaCard.jsx
import React from "react";

function VascaCard({ vasca }) {

  const percent = Math.round((vasca.contenuto / vasca.capacita) * 100);

  const statoColor = {
    fermentazione: "#ff4d4f",
    maturazione: "#52c41a",
    vuota: "#8c8c8c",
  };

  return (
    <div className="vasca-card">
      <h3>{vasca.nome}</h3>

      <p><strong>Stato:</strong> <span style={{ color: statoColor[vasca.stato] }}>{vasca.stato}</span></p>

      <p><strong>Temperatura:</strong> {vasca.temperatura}°C</p>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${percent}%` }}></div>
      </div>

      <p>{vasca.contenuto} L / {vasca.capacita} L </p>
    </div>
  );
}

export default VascaCard;
