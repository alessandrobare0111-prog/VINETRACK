import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// Carica variabili ambiente (.env)
dotenv.config();

const { Pool } = pg;

// Connessione a PostgreSQL (Supabase)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const app = express();
const PORT = 5000;

// Middleware
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
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "ok", time: result.rows[0].now });
  } catch (err) {
    console.error("❌ Errore DB:", err);
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
  } catch (err) {
    console.error("❌ Errore VASCHE:", err);
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
  } catch (err) {
    console.error("❌ Errore LOTTI:", err);
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
  } catch (err) {
    console.error("❌ Errore ANALISI:", err);
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
  } catch (err) {
    console.error("❌ Errore IMBOTTIGLIAMENTI:", err);
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
             l.codice AS lotto_codice,
             a.id     AS analisi_rif,
             i.id     AS imb_rif
      FROM eventi_cantina e
      LEFT JOIN vasche v ON e.vasca_id = v.id
      LEFT JOIN lotti l ON e.lotto_id = l.id
      LEFT JOIN analisi a ON e.analisi_id = a.id
      LEFT JOIN imbottigliamenti i ON e.imbottigliamento_id = i.id
      ORDER BY e.data_evento DESC, e.id DESC
    `;
    const result = await pool.query(q);
    res.json(result.rows);
  } catch (err) {
    console.error("❌ Errore EVENTI:", err);
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
  } catch (err) {
    console.error("❌ Errore VIGNETI:", err);
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
  } catch (err) {
    console.error("❌ Errore PARCELLE:", err);
    res.status(500).json({ error: "Errore nel recupero delle parcelle" });
  }
});


// =============================================================
// ====================== ⭐ API TRATTAMENTI ====================
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
  } catch (err) {
    console.error("❌ Errore TRATTAMENTI:", err);
    res.status(500).json({ error: "Errore nel recupero dei trattamenti" });
  }
});


// =============================================================
// ========================= SERVER START ======================
// =============================================================
app.listen(PORT, () => {
  console.log(`🚀 Server VineTrack avviato sulla porta ${PORT}`);
});
