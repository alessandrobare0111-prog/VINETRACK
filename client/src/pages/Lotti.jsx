// /src/pages/Lotti.jsx

import React from "react";
import lotti from "../mock/lotti";
import vasche from "../mock/vasche";
import LottoCard from "../components/LottoCard";

export default function Lotti() {
  return (
    <div className="page">
      <h2>Lotti</h2>
      <p>Gestione dei lotti vinicoli</p>

      <div className="lotti-grid">
        {lotti.map(lotto => {
          const vasca = vasche.find(v => v.id === lotto.vascaId);

          return (
            <LottoCard
              key={lotto.id}
              lotto={lotto}
              vasca={vasca}
            />
          );
        })}
      </div>
    </div>
  );
}
