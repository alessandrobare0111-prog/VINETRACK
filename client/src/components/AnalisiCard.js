function AnalisiCard({ lotto, ph, zuccheri, aciditaTot, alcol, solfiti }) {
  return (
    <div className="analisi-card">
      <h3>Analisi Lotto {lotto}</h3>
      <p><strong>pH:</strong> {ph}</p>
      <p><strong>Zuccheri:</strong> {zuccheri}</p>
      <p><strong>Acidità totale:</strong> {aciditaTot}</p>
      <p><strong>Alcol:</strong> {alcol}</p>
      <p><strong>Solfiti:</strong> {solfiti}</p>
    </div>
  );
}

export default AnalisiCard;
