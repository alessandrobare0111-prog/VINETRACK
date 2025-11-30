import ImbottigliamentoCard from "../components/ImbottigliamentoCard";

function Imbottigliamenti() {
  return (
    <div className="imb-page page">
      <h2>Imbottigliamenti</h2>
      <p>Storico delle operazioni di imbottigliamento</p>

      <div className="imb-list">
        <ImbottigliamentoCard
          lotto="L001"
          data="2024-02-03"
          bottiglie={1200}
          formato="0.75 L"
          codiceLotto="BT-2024-A"
        />

        <ImbottigliamentoCard
          lotto="L002"
          data="2023-11-22"
          bottiglie={800}
          formato="0.75 L"
          codiceLotto="BT-2023-D"
        />
      </div>
    </div>
  );
}

export default Imbottigliamenti;
