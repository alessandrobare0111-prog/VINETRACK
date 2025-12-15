export default function VascaCard({ vasca }) {
  const percent = Math.round((vasca.volume / vasca.capacita) * 100);

  return (
    <div className="vasca-card">
      <h3>{vasca.nome}</h3>
      <p>Lotto: {vasca.lotto}</p>
      <p>
        Volume: {vasca.volume} hl / {vasca.capacita} hl
      </p>

      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${percent}%` }}
        ></div>
      </div>

      <button>Travaso</button>
    </div>
  );
}
