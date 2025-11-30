function ParcellaCard({ parcella }) {
  return (
    <div className="parcella-card">
      <h3>{parcella.nome}</h3>
      <p><strong>Vitigno:</strong> {parcella.vitigno}</p>
      <p><strong>Superficie:</strong> {parcella.superficie} ha</p>
      <p><strong>Esposizione:</strong> {parcella.esposizione}</p>
      <p><strong>Altitudine:</strong> {parcella.altitudine} m</p>
    </div>
  );
}

export default ParcellaCard;
