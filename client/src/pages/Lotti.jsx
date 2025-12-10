import { useState, useEffect } from "react";
import "./Lotti.css";

function Lotti() {
  // Stato lotti
  const [lotti, setLotti] = useState([]);
  const [loading, setLoading] = useState(true);

  // Stato modale
  const [showModal, setShowModal] = useState(false);
  const [nuovoLotto, setNuovoLotto] = useState({
    nome: "",
    varieta: "",
    quantita: "",
    anno: "",
  });

  // Caricamento lotti (simulazione – poi collego Supabase)
  useEffect(() => {
    setTimeout(() => {
      setLotti([
        { id: 1, nome: "Lotto A", varieta: "Sangiovese", quantita: 1200, anno: 2023 },
        { id: 2, nome: "Lotto B", varieta: "Merlot", quantita: 850, anno: 2022 },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  function apriModale() {
    setShowModal(true);
  }

  function chiudiModale() {
    setShowModal(false);
  }

  function salvaLotto() {
    const nuovo = { id: Date.now(), ...nuovoLotto };
    setLotti([...lotti, nuovo]);
    chiudiModale();
  }

  return (
    <div className="page">
      <h2>Lotti</h2>
      <p>Gestione dei lotti di vino</p>

      <button className="btn-add" onClick={apriModale}>
        + Aggiungi Lotto
      </button>

      {loading ? (
        <p>Caricamento...</p>
      ) : (
        <table className="tabella-lotti">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Varietà</th>
              <th>Quantità (L)</th>
              <th>Anno</th>
            </tr>
          </thead>
          <tbody>
            {lotti.map((lotto) => (
              <tr key={lotto.id}>
                <td>{lotto.nome}</td>
                <td>{lotto.varieta}</td>
                <td>{lotto.quantita}</td>
                <td>{lotto.anno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* MODALE */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Nuovo Lotto</h3>

            <label>Nome</label>
            <input
              type="text"
              value={nuovoLotto.nome}
              onChange={(e) => setNuovoLotto({ ...nuovoLotto, nome: e.target.value })}
            />

            <label>Varietà</label>
            <input
              type="text"
              value={nuovoLotto.varieta}
              onChange={(e) => setNuovoLotto({ ...nuovoLotto, varieta: e.target.value })}
            />

            <label>Quantità (L)</label>
            <input
              type="number"
              value={nuovoLotto.quantita}
              onChange={(e) => setNuovoLotto({ ...nuovoLotto, quantita: e.target.value })}
            />

            <label>Anno</label>
            <input
              type="number"
              value={nuovoLotto.anno}
              onChange={(e) => setNuovoLotto({ ...nuovoLotto, anno: e.target.value })}
            />

            <div className="modal-buttons">
              <button className="btn-cancel" onClick={chiudiModale}>
                Annulla
              </button>
              <button className="btn-save" onClick={salvaLotto}>
                Salva
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lotti;
