function ImbottigliamentoCard({ lotto, data, bottiglie, formato, codiceLotto }) {
  return (
    <div className="imb-card">
      <h3>Lotto {lotto}</h3>
      <p><strong>Data imbottigliamento:</strong> {data}</p>
      <p><strong>Bottiglie:</strong> {bottiglie}</p>
      <p><strong>Formato:</strong> {formato}</p>
      <p><strong>Codice lotto:</strong> {codiceLotto}</p>
    </div>
  );
}

export default ImbottigliamentoCard;
