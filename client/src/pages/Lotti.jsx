import "./Lotti.css";
import LottoCard from "../components/LottoCard";

export default function Lotti() {
  // Dati mock (temporanei)
  const lotti = [
    {
      codice: "LOT-2024-001",
      vino: "Chianti Classico",
      annata: 2024,
      stato: "Attivo",
      volume: 5200
    },
    {
      codice: "LOT-2023-014",
      vino: "Sangiovese",
      annata: 2023,
      stato: "Affinamento",
      volume: 3100
    },
    {
      codice: "LOT-2022-008",
      vino: "Riserva",
      annata: 2022,
      stato: "Chiuso",
      volume: 1800
    }
  ];

  return (
    <div className="page lotti-page">
      <h1>Lotti</h1>
      <p className="page-subtitle">Gestione dei lotti di vino</p>

      <div className="lotti-grid">
        {lotti.map((lotto) => (
          <LottoCard key={lotto.codice} {...lotto} />
        ))}
      </div>
    </div>
  );
}
