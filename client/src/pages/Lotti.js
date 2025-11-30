import LottoCard from "../components/LottoCard";

function Lotti() {
  return (
    <div className="lotti-page page">
      <h2>Lotti</h2>
      <p>Gestione dei lotti di vino e loro stato enologico</p>

      <div className="lotti-list">
        <LottoCard
          id="L001"
          annata="2023"
          vitigno="Sangiovese"
          stato="Fermentazione"
          volume={1500}
        />

        <LottoCard
          id="L002"
          annata="2022"
          vitigno="Trebbiano"
          stato="Affinamento"
          volume={900}
        />
      </div>
    </div>
  );
}

export default Lotti;
