import { useEffect, useState } from "react";
import VascaCard from "../components/VascaCard";

function Vasche() {
  const [vasche, setVasche] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVasche() {
      try {
        const response = await fetch("http://localhost:5000/api/vasche");
        const data = await response.json();
        setVasche(data);
      } catch (error) {
        console.error("Errore nel caricamento vasche:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVasche();
  }, []);

  if (loading) {
    return <div className="page"><h3>Caricamento vasche...</h3></div>;
  }

  return (
    <div className="vasche-page page">
      <h2>Vasche</h2>
      <p>Situazione attuale delle vasche in cantina</p>

      <div className="vasche-list">
        {vasche.map((v) => (
          <VascaCard
            key={v.id}
            id={v.codice}
            tipo={v.tipo}
            stato={v.stato}
            volume={v.volume}
            capacita={v.capacita}
          />
        ))}
      </div>
    </div>
  );
}

export default Vasche;
