import { useEffect, useState } from "react";
import LottoCard from "../components/LottoCard";

function Lotti() {
  const [lotti, setLotti] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLotti() {
      try {
        const response = await fetch("http://localhost:5000/api/lotti");
        const data = await response.json();
        setLotti(data);
      } catch (error) {
        console.error("Errore caricamento lotti:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLotti();
  }, []);

  if (loading) {
    return <div className="page"><h3>Caricamento lotti...</h3></div>;
  }

  return (
    <div className="lotti-page page">
      <h2>Lotti</h2>
      <p>Gestione dei lotti di vino</p>

      <div className="lotti-list">
        {lotti.map((lotto) => (
          <LottoCard
            key={lotto.id}
            id={lotto.codice}
            annata={lotto.annata}
            vitigno={lotto.vitigno}
            stato={lotto.stato}
            volume={lotto.volume}
            vasca={lotto.vasca_codice}
          />
        ))}
      </div>
    </div>
  );
}

export default Lotti;
