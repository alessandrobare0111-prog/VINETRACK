import "./App.css";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout-main">
        <TopBar />

        <main className="layout-content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
