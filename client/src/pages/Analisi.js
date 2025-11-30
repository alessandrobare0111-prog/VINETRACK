import { useEffect, useState } from "react";
import AnalisiCard from "../components/AnalisiCard";

function Analisi() {
  const [analisi, setAnalisi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnalisi() {
      try {
        const response = await fetch("http://localhost:5000/api/analisi");
        const data = await response.json();
        setAnalisi(data);
      } catch (error) {
        console.error("Errore caricamento analisi:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalisi();
  }, []);

  if (loading) return <div className="page"><h3>Caricamento analisi...</h3></div>;

  return (
    <div className="analisi-page page">
      <h2>Analisi del vino</h2>
      <p>Parametri chimici dei lotti</p>

      <div className="analisi-list">
        {analisi.map((a) => (
          <AnalisiCard
            key={a.id}
            lotto={a.lotto_codice}
            ph={a.ph}
            zuccheri={a.zuccheri}
            aciditaTot={a.acidita_tot}
            aciditaVolatile={a.acidita_volatile}
            alcol={a.alcol}
            solfiti={a.solfiti_total}
            note={a.note}
            data={a.data_analisi}
          />
        ))}
      </div>
    </div>
  );
}

export default Analisi;
