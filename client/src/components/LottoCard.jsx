// /src/components/LottoCard.jsx
import React from "react";

export default function LottoCard({ lotto, vasca }) {
  const statoColor = {
    fermentazione: "#ff4d4f",
    maturazione: "#52c41a",
    pronto: "#1890ff",
    vuoto: "#8c8c8c",
  };

  return (
    <div className="lotto-card">
      <h3>{lotto.codice}</h3>

      <p><strong>Varietà:</strong> {lotto.varieta}</p>
      <p><strong>Volume:</strong> {lotto.volume} L</p>

      <p>
        <strong>Stato:</strong>{" "}
        <span style={{ color: statoColor[lotto.stato] }}>
          {lotto.stato}
        </span>
      </p>

      <p><strong>Vasca:</strong> {vasca ? vasca.nome : "N/A"}</p>

      <p><strong>Creato il:</strong> {lotto.dataCreazione}</p>
    </div>
  );
}
