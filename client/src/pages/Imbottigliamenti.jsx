import { useEffect, useState } from "react";
import ImbottigliamentoCard from "../components/ImbottigliamentoCard";

function Imbottigliamenti() {
  const [imbottigliamenti, setImbottigliamenti] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImbottigliamenti() {
      try {
        const response = await fetch("http://localhost:5000/api/imbottigliamenti");
        const data = await response.json();
        setImbottigliamenti(data);
      } catch (error) {
        console.error("Errore caricamento imbottigliamenti:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchImbottigliamenti();
  }, []);

  if (loading) {
    return (
      <div className="page">
        <h3>Caricamento imbottigliamenti...</h3>
      </div>
    );
  }

  return (
    <div className="imb-page page">
      <h2>Imbottigliamenti</h2>
      <p>Storico delle operazioni di imbottigliamento</p>

      <div className="imb-list">
        {imbottigliamenti.map((imb) => (
          <ImbottigliamentoCard
            key={imb.id}
            lotto={imb.lotto_codice}
            data={imb.data_imbottigliamento}
            bottiglie={imb.bottiglie}
            formato={imb.formato}
            codiceLotto={imb.codice_lotto}
            note={imb.note}
          />
        ))}
      </div>
    </div>
  );
}

export default Imbottigliamenti;
