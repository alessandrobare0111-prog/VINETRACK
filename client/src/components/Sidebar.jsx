import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>VineTrack</h3>

      <nav>
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/vasche">Vasche</NavLink>
        <NavLink to="/lotti">Lotti</NavLink>
        <NavLink to="/analisi">Analisi</NavLink>
        <NavLink to="/imbottigliamenti">Imbottigliamenti</NavLink>
        <NavLink to="/tracciabilita">Tracciabilità</NavLink>
        <NavLink to="/mappa-cantina">Mappa Cantina</NavLink>
        <NavLink to="/mappa-vigneto">Mappa Vigneto</NavLink>
        <NavLink to="/trattamenti">Trattamenti</NavLink>
        <NavLink to="/meteo">Meteo</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
