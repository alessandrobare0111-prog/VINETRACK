import { useState } from "react";
import TravasoModal from "./TravasoModal";

export default function VascaCard({ vasca }) {
  const [open, setOpen] = useState(false);
  const percent = Math.round((vasca.volume / vasca.capacita) * 100);

  return (
    <>
      <div className="vasca-card">
        <h3>{vasca.nome}</h3>
        <p>Lotto: {vasca.lotto}</p>
        <p>
          Volume: {vasca.volume} hl / {vasca.capacita} hl
        </p>

        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${percent}%` }}
          ></div>
        </div>

        <button onClick={() => setOpen(true)}>Travaso</button>
      </div>

      {open && (
        <TravasoModal vasca={vasca} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
