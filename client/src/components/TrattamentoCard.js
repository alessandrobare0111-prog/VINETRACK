function TrattamentoCard({ trattamento }) {
  return (
    <div className="trattamento-card">
      <h3>{trattamento.prodotto}</h3>

      <p><strong>Data:</strong> {new Date(trattamento.data_trattamento).toLocaleDateString()}</p>
      <p><strong>Parcella:</strong> {trattamento.parcella_nome}</p>
      <p><strong>Vitigno:</strong> {trattamento.vitigno}</p>

      <p><strong>Dose:</strong> {trattamento.dose} {trattamento.unita}</p>
      <p><strong>Volume acqua:</strong> {trattamento.volume_acqua} L</p>

      <p><strong>Meteo:</strong>  
        T° {trattamento.meteo_temperatura}°C • 
        Umidità {trattamento.meteo_umidita}% • 
        Pioggia {trattamento.meteo_pioggia} mm
      </p>

      <p>
        <strong>Rischio peronospora:</strong> {trattamento.rischio_peronospora}<br/>
        <strong>Rischio oidio:</strong> {trattamento.rischio_oidio}
      </p>

      {trattamento.note && (
        <p><strong>Note:</strong> {trattamento.note}</p>
      )}
    </div>
  );
}

export default TrattamentoCard;
