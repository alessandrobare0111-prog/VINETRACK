function MeteoCard({ meteo }) {
  return (
    <div className="meteo-card">
      <h3>{meteo.vigneto_nome}</h3>

      <p><strong>Data:</strong> {new Date(meteo.data_rilevamento).toLocaleString()}</p>

      <p><strong>Temperatura:</strong> {meteo.temperatura} °C</p>
      <p><strong>Umidità:</strong> {meteo.umidita} %</p>
      <p><strong>Vento:</strong> {meteo.vento} km/h</p>
      <p><strong>Pioggia:</strong> {meteo.pioggia} mm</p>
      <p><strong>Pressione:</strong> {meteo.pressione} hPa</p>

      <p style={{ marginTop: "0.5rem" }}>
        <strong>Rischio peronospora:</strong> {meteo.rischio_peronospora ?? "—"}<br />
        <strong>Rischio oidio:</strong> {meteo.rischio_oidio ?? "—"}
      </p>
    </div>
  );
}

export default MeteoCard;
