import "./Travaso.css";

export default function TuboTravaso({ attivo }) {
  return (
    <div className="tubo-container">
      <div className={`tubo ${attivo ? "tubo-attivo" : ""}`} />
    </div>
  );
}
