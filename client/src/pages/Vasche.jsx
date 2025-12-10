// /src/pages/Vasche.jsx
import React from "react";
import vasche from "../mock/vasche";
import VascaCard from "../components/VascaCard";

export default function Vasche() {
  return (
    <div className="page">
      <h2>Vasche</h2>
      <p>Gestione delle vasche della cantina</p>

      <div className="vasche-grid">
        {vasche.map(v => (
          <VascaCard key={v.id} vasca={v} />
        ))}
      </div>
    </div>
  );
}
