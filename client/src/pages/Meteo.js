import { useEffect, useState } from "react";
import MeteoCard from "../components/MeteoCard";

function Meteo() {
  const [meteo, setMeteo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeteo() {
      try {
        const response = await fetch("http://localhost:5000/api/meteo");
        const data = await response.json();
        setMeteo(data);
      } catch (err) {
        console.error("Errore caricamento meteo:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMeteo();
  }, []);

  return (
    <div className="page">
      <h2>Meteo</h2>
      <p>Dati meteorologici registrati nei vigneti</p>

      {loading && <p>Caricamento dati meteo...</p>}

      <div className="meteo-list">
        {meteo.map((m) => (
          <MeteoCard key={m.id} meteo={m} />
        ))}
      </div>
    </div>
  );
}

export default Meteo;
