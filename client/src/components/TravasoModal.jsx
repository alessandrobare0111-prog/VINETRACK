export default function TravasoModal({ vasca, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Travaso</h2>

        <p><strong>Da:</strong> {vasca.nome}</p>

        <label>Vasca destinazione</label>
        <select>
          <option>Vasca B</option>
          <option>Vasca C</option>
        </select>

        <label>Quantità (hl)</label>
        <input type="number" />

        <div className="modal-actions">
          <button onClick={onClose}>Annulla</button>
          <button className="primary">Conferma travaso</button>
        </div>
      </div>
    </div>
  );
}
