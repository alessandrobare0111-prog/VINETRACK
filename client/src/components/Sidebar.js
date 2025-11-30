import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>VineTrack</h3>

      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
          Dashboard
        </NavLink>

        <NavLink to="/vasche" className={({ isActive }) => isActive ? "active" : ""}>
          Vasche
        </NavLink>

        <NavLink to="/lotti" className={({ isActive }) => isActive ? "active" : ""}>
          Lotti
        </NavLink>

        <NavLink to="/analisi" className={({ isActive }) => isActive ? "active" : ""}>
          Analisi
        </NavLink>

        <NavLink to="/imbottigliamenti" className={({ isActive }) => isActive ? "active" : ""}>
          Imbottigliamenti
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
