import "./LottoCard.css";

export default function LottoCard({ codice, vino, annata, stato, volume }) {
  return (
    <div className="lotto-card">
      <div className="lotto-header">
        <h3>{codice}</h3>
        <span className={`stato ${stato.toLowerCase()}`}>{stato}</span>
      </div>

      <div className="lotto-body">
        <p><strong>Vino:</strong> {vino}</p>
        <p><strong>Annata:</strong> {annata}</p>
        <p><strong>Volume:</strong> {volume} L</p>
      </div>
    </div>
  );
}
