import VascaCard from "../components/VascaCard";

function Vasche() {
  return (
    <div className="vasche-page page">
      <h2>Vasche</h2>
      <p>Situazione attuale delle vasche in cantina</p>

      <div className="vasche-list">
        <VascaCard
          id="001"
          tipo="Acciaio"
          stato="Fermentazione"
          volume={1200}
          capacita={2000}
        />

        <VascaCard
          id="002"
          tipo="Legno"
          stato="Affinamento"
          volume={450}
          capacita={600}
        />
      </div>
    </div>
  );
}

export default Vasche;
