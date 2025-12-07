import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

function MappaVigneto() {
  const [parcelle, setParcelle] = useState([]);

  useEffect(() => {
    async function fetchParcelle() {
      try {
        const response = await fetch("http://localhost:5000/api/parcelle");
        const data = await response.json();
        setParcelle(data);
      } catch (err) {
        console.error("Errore nel caricamento parcelle:", err);
      }
    }

    fetchParcelle();
  }, []);

  return (
    <div className="page">
      <h2>Mappa Vigneto</h2>
      <p>Visualizzazione delle parcelle del vigneto</p>

      <div className="vigneto-map">
        <MapContainer
          center={[43.7696, 11.2558]}   // posizione iniziale (Firenze, modificabile)
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "100%" }}
        >

          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {parcelle.map((p) =>
            p.coordinates && p.coordinates.length > 0 ? (
              <Polygon
                key={p.id}
                positions={p.coordinates}
                pathOptions={{ color: "green" }}
              >
                <Popup>
                  <strong>{p.nome}</strong><br/>
                  Vitigno: {p.vitigno}<br/>
                  Superficie: {p.superficie} ha<br/>
                  Esposizione: {p.esposizione}<br/>
                  Altitudine: {p.altitudine} m
                </Popup>
              </Polygon>
            ) : null
          )}
        </MapContainer>
      </div>
    </div>
  );
}

export default MappaVigneto;
