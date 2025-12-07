import React from "react";
import VascaCard from "../components/VascaCard";

function Vasche() {
  // MOCK DATA — poi collegheremo Supabase
  const vasche = [
    {
      numero: 1,
      capacita: 5000,
      contenuto: 3200,
      lotto: "Sangiovese 2024",
      stato: "Fermentazione",
    },
    {
      numero: 2,
      capacita: 3000,
      contenuto: 3000,
      lotto: "Chianti DOCG",
      stato: "Stoccaggio",
    },
    {
      numero: 3,
      capacita: 2500,
      contenuto: 0,
      lotto: "-",
      stato: "Vuota",
    },
  ];

  return (
    <div className="page">
      <h2>Vasche</h2>
      <p>Gestione completa delle vasche di cantina</p>

      <button className="btn-add">+ Aggiungi Vasca</button>

      <div className="vasche-list">
        {vasche.map((v, i) => (
          <VascaCard key={i} vasca={v} />
        ))}
      </div>
    </div>
  );
}

export default Vasche;
