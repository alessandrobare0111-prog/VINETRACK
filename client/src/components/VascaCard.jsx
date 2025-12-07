import React from "react";
import "./VascaCard.css";

function VascaCard({ vasca }) {
  return (
    <div className="vasca-card">
      <h3>Vasca {vasca.numero}</h3>

      <p><strong>Capacità:</strong> {vasca.capacita} L</p>
      <p><strong>Contenuto:</strong> {vasca.contenuto} L</p>
      <p><strong>Vitigno / Lotto:</strong> {vasca.lotto}</p>

      <p className={`stato stato-${vasca.stato.toLowerCase()}`}>
        <strong>Stato:</strong> {vasca.stato}
      </p>
    </div>
  );
}

export default VascaCard;
