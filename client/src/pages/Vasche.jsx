import VascaCard from "../components/VascaCard";

const vasche = [
  { id: 1, nome: "Vasca A", capacita: 100, volume: 80, lotto: "Lotto 2024-01" },
  { id: 2, nome: "Vasca B", capacita: 150, volume: 120, lotto: "Lotto 2024-02" },
];

export default function Vasche() {
  return (
    <div className="page">
      <h2>Vasche</h2>
      <div className="grid">
        {vasche.map((v) => (
          <VascaCard key={v.id} vasca={v} />
        ))}
      </div>
    </div>
  );
}
