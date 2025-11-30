import { useEffect, useState } from "react";

function Tracciabilita() {
  const [eventi, setEventi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEventi() {
      try {
        const response = await fetch("http://localhost:5000/api/eventi");
        const data = await response.json();
        setEventi(data);
      } catch (error) {
        console.error("Errore caricamento eventi:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEventi();
  }, []);

  if (loading) {
    return <div className="page"><h3>Caricamento tracciabilità...</h3></div>;
  }

  return (
    <div className="page">
      <h2>Tracciabilità</h2>
      <p>Storico completo delle operazioni di cantina</p>

      <div className="timeline">
        {eventi.map((ev) => (
          <div key={ev.id} className="event-card">
            <span className="event-date">{new Date(ev.data_evento).toLocaleString()}</span>
            <h3>{ev.tipo_evento}</h3>
            {ev.descrizione && <p>{ev.descrizione}</p>}

            {ev.lotto_codice && <p><strong>Lotto:</strong> {ev.lotto_codice}</p>}
            {ev.vasca_codice && <p><strong>Vasca:</strong> {ev.vasca_codice}</p>}
            {ev.volume_coinvolto && <p><strong>Volume:</strong> {ev.volume_coinvolto} L</p>}
            {ev.note && <p><strong>Note:</strong> {ev.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tracciabilita;
