import "./Vasche.css";

const vascheMock = [
  {
    id: 1,
    nome: "Vasca 01",
    capacita: "50 hl",
    contenuto: "Sangiovese 2024",
    stato: "fermentazione",
  },
  {
    id: 2,
    nome: "Vasca 02",
    capacita: "30 hl",
    contenuto: "Vuota",
    stato: "vuota",
  },
  {
    id: 3,
    nome: "Vasca 03",
    capacita: "80 hl",
    contenuto: "Pulizia in corso",
    stato: "pulizia",
  },
];

function statoClass(stato) {
  if (stato === "fermentazione") return "status-fermentazione";
  if (stato === "pulizia") return "status-pulizia";
  return "status-vuota";
}

export default function Vasche() {
  return (
    <div className="vasche-page">
      <h1>Vasche</h1>
      <p className="page-subtitle">
        Gestione delle vasche di cantina e stato di utilizzo
      </p>

      <div className="vasche-grid">
        {vascheMock.map((vasca) => (
          <div key={vasca.id} className="vasca-card">
            <div className="vasca-title">{vasca.nome}</div>

            <div className="vasca-info">
              Capacità: {vasca.capacita}
              <br />
              Contenuto: {vasca.contenuto}
            </div>

            <span className={`vasca-status ${statoClass(vasca.stato)}`}>
              {vasca.stato}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
