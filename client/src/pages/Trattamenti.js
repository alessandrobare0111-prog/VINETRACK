import { useEffect, useState } from "react";
import TrattamentoCard from "../components/TrattamentoCard";

function Trattamenti() {
  const [trattamenti, setTrattamenti] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrattamenti() {
      try {
        const response = await fetch("http://localhost:5000/api/trattamenti");
        const data = await response.json();
        setTrattamenti(data);
      } catch (err) {
        console.error("Errore caricamento trattamenti:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchTrattamenti();
  }, []);

  return (
    <div className="page">
      <h2>Trattamenti</h2>
      <p>Storico dei trattamenti eseguiti sulle parcelle</p>

      {loading && <p>Caricamento...</p>}

      <div className="trattamenti-list">
        {trattamenti.map((t) => (
          <TrattamentoCard key={t.id} trattamento={t} />
        ))}
      </div>
    </div>
  );
}

export default Trattamenti;
