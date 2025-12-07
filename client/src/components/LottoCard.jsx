function LottoCard({ id, annata, vitigno, stato, volume }) {
  return (
    <div className="lotto-card">
      <h3>Lotto {id}</h3>
      <p><strong>Annata:</strong> {annata}</p>
      <p><strong>Vitigno:</strong> {vitigno}</p>
      <p><strong>Stato:</strong> {stato}</p>
      <p><strong>Volume:</strong> {volume} L</p>
    </div>
  );
}

export default LottoCard;
