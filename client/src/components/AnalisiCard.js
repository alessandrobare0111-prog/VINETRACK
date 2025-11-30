function AnalisiCard({ lotto, ph, zuccheri, aciditaTot, aciditaVolatile, alcol, solfiti, note, data }) {
  return (
    <div className="analisi-card">
      <h3>Analisi Lotto {lotto}</h3>
      <p><strong>Data:</strong> {data}</p>
      <p><strong>pH:</strong> {ph}</p>
      <p><strong>Zuccheri:</strong> {zuccheri} g/L</p>
      <p><strong>Acidità Totale:</strong> {aciditaTot} g/L</p>
      <p><strong>Acidità Volatile:</strong> {aciditaVolatile} g/L</p>
      <p><strong>Alcol:</strong> {alcol}%</p>
      <p><strong>Solfiti Totali:</strong> {solfiti} mg/L</p>
      {note && <p><strong>Note:</strong> {note}</p>}
    </div>
  );
}

export default AnalisiCard;
