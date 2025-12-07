function ImbottigliamentoCard({ lotto, data, bottiglie, formato, codiceLotto, note }) {
  return (
    <div className="imb-card">
      <h3>Lotto {lotto}</h3>
      <p><strong>Data imbottigliamento:</strong> {data}</p>
      <p><strong>Bottiglie:</strong> {bottiglie}</p>
      <p><strong>Formato:</strong> {formato}</p>
      <p><strong>Codice lotto:</strong> {codiceLotto}</p>
      {note && <p><strong>Note:</strong> {note}</p>}
    </div>
  );
}

export default ImbottigliamentoCard;
