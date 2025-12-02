import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// =============================================================
// =========================== TEST ============================
// =============================================================
app.get("/", (req, res) => {
  res.send("VineTrack backend attivo!");
});

app.get("/api/test-db", async (req, res) => {
  try {
    const q = "SELECT NOW()";
    const result = await pool.query(q);
    res.json({ status: "ok", time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: "Errore connessione database" });
  }
});

// =============================================================
// ========================= API VASCHE ========================
// =============================================================
app.get("/api/vasche", async (req, res) => {
  try {
    const q = "SELECT * FROM vasche ORDER BY id ASC";
    const result = await pool.query(q);
    res.json(result.rows);
  } catch {
    res.status(500).json({ error: "Errore nel recupero delle vasche" });
  }
});

// =============================================================
// ========================== API LOTTI ========================
// =============================================================
app.get("/api/lotti", async (req, res) => {
  try {
    const q = `
      SELECT l.*, v.codice AS vasca_codice
      FROM lotti l
      LEFT JOIN vasche v ON l.vasca_id = v.id
      ORDER BY l.id ASC
    `;
    const result = await pool.query(q);
    res.json(result.rows);
  } catch {
    res.status(500).json({ error: "Errore nel recupero dei lotti" });
  }
});

// =============================================================
// ========================= API ANALISI =======================
// =============================================================
app.get("/api/analisi", async (req, res) => {
  try {
    const q = `
      SELECT a.*, l.codice AS lotto_codice
      FROM analisi a
      JOIN lotti l ON a.lotto_id = l.id
      ORDER BY a.id DESC
    `;
    const result = await pool.query(q);
    res.json(result.rows);
  } catch {
    res.status(500).json({ error: "Errore nel recupero delle analisi" });
  }
});

// =============================================================
// ================= API IMBOTTIGLIAMENTI ======================
// =============================================================
app.get("/api/imbottigliamenti", async (req, res) => {
  try {
    const q = `
      SELECT i.*, l.codice AS lotto_codice
      FROM imbottigliamenti i
      JOIN lotti l ON i.lotto_id = l.id
      ORDER BY i.data_imbottigliamento DESC, i.id DESC
    `;
    const result = await pool.query(q);
    res.json(result.rows);
  } catch {
    res.status(500).json({ error: "Errore nel recupero degli imbottigliamenti" });
  }
});

// =============================================================
// ========================= API EVENTI ========================
// =============================================================
app.get("/api/eventi", async (req, res) => {
  try {
    const q = `
      SELECT e.*,
             v.codice AS vasca_codice,
             l.codice AS lotto_codice
      FROM eventi_cantina e
      LEFT JOIN vasche v ON e.vasca_id = v.id
      LEFT JOIN lotti l ON e.lotto_id = l.id
      ORDER BY e.data_evento DESC, e.id DESC
    `;
    const result = await pool.query(q);
    res.json(result.rows);
  } catch {
    res.status(500).json({ error: "Errore nel recupero degli eventi" });
  }
});

// =============================================================
// ========================= API VIGNETI =======================
// =============================================================
app.get("/api/vigneti", async (req, res) => {
  try {
    const q = "SELECT * FROM vigneti ORDER BY id ASC";
    const result = await pool.query(q);
    res.json(result.rows);
  } catch {
    res.status(500).json({ error: "Errore nel recupero dei vigneti" });
  }
});

// =============================================================
// ========================= API PARCELLE ======================
// =============================================================
app.get("/api/parcelle", async (req, res) => {
  try {
    const q = `
      SELECT p.*, v.nome AS vigneto_nome
      FROM parcelle p
      JOIN vigneti v ON p.vigneto_id = v.id
      ORDER BY p.id ASC
    `;
    const result = await pool.query(q);
    res.json(result.rows);
  } catch {
    res.status(500).json({ error: "Errore nel recupero delle parcelle" });
  }
});

// =============================================================
// ======================= API TRATTAMENTI =====================
// =============================================================
app.get("/api/trattamenti", async (req, res) => {
  try {
    const q = `
      SELECT t.*, p.nome AS parcella_nome, p.vitigno
      FROM trattamenti t
      JOIN parcelle p ON t.parcella_id = p.id
      ORDER BY t.data_trattamento DESC, t.id DESC
    `;
    const result = await pool.query(q);
    res.json(result.rows);
  } catch {
    res.status(500).json({ error: "Errore nel recupero dei trattamenti" });
  }
});

// =============================================================
// ============================ API METEO =======================
// =============================================================

// GET meteo storico
app.get("/api/meteo", async (req, res) => {
  try {
    const q = `
      SELECT m.*, v.nome AS vigneto_nome
      FROM meteo m
      JOIN vigneti v ON m.vigneto_id = v.id
      ORDER BY m.data_rilevamento DESC
    `;
    const result = await pool.query(q);
    res.json(result.rows);
  } catch {
    res.status(500).json({ error: "Errore recupero meteo" });
  }
});

// Aggiungi dati meteo
app.post("/api/meteo/add", async (req, res) => {
  const {
    vigneto_id,
    temperatura,
    umidita,
    vento,
    pioggia,
    pressione,
    rischio_peronospora,
    rischio_oidio
  } = req.body;

  try {
    const q = `
      INSERT INTO meteo
      (vigneto_id, temperatura, umidita, vento, pioggia, pressione, rischio_peronospora, rischio_oidio)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    `;
    await pool.query(q, [
      vigneto_id,
      temperatura,
      umidita,
      vento,
      pioggia,
      pressione,
      rischio_peronospora,
      rischio_oidio
    ]);

    res.json({ status: "ok" });
  } catch (err) {
    res.status(500).json({ error: "Errore salvataggio meteo" });
  }
});

// Meteo live
app.get("/api/meteo/live/:vigneto_id", async (req, res) => {
  const { vigneto_id } = req.params;

  try {
    const vigneto = await pool.query(
      "SELECT * FROM vigneti WHERE id=$1",
      [vigneto_id]
    );

    if (vigneto.rows.length === 0) {
      return res.status(404).json({ error: "Vigneto non trovato" });
    }

    const { lat, lon } = vigneto.rows[0];

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_KEY}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Errore recupero meteo live" });
  }
});

// =============================================================
// ========================= AVVIO SERVER =======================
// =============================================================
app.listen(PORT, () => {
  console.log(`🚀 VineTrack server avviato sulla porta ${PORT}`);
});
