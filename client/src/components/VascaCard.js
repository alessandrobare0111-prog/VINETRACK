function VascaCard({ id, tipo, stato, volume, capacita }) {
  return (
    <div className="vasca-card">
      <h3>Vasca {id}</h3>
      <p><strong>Tipo:</strong> {tipo}</p>
      <p><strong>Stato:</strong> {stato}</p>
      <p><strong>Volume attuale:</strong> {volume} L</p>
      <p><strong>Capacità:</strong> {capacita} L</p>
    </div>
  );
}

export default VascaCard;
