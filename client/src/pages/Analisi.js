import AnalisiCard from "../components/AnalisiCard";

function Analisi() {
  return (
    <div className="analisi-page page">
      <h2>Analisi del vino</h2>
      <p>Parametri chimici e organolettici dei lotti</p>

      <div className="analisi-list">
        <AnalisiCard
          lotto="L001"
          ph={3.4}
          zuccheri="3.2 g/L"
          aciditaTot="5.8 g/L"
          alcol="12.5%"
          solfiti="48 mg/L"
        />

        <AnalisiCard
          lotto="L002"
          ph={3.2}
          zuccheri="1.8 g/L"
          aciditaTot="6.1 g/L"
          alcol="11.8%"
          solfiti="52 mg/L"
        />
      </div>
    </div>
  );
}

export default Analisi;
