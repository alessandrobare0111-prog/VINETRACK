import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// Carica variabili dal file .env
dotenv.config();

const { Pool } = pg;

// Connessione a PostgreSQL (Supabase)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test API semplice
app.get("/", (req, res) => {
  res.send("VineTrack backend attivo!");
});

// Test connessione DB
app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "ok", time: result.rows[0].now });
  } catch (error) {
    console.error("Errore DB:", error);
    res.status(500).json({ error: "Errore connessione database" });
  }
});

// --- API VASCHE (lettura vasche) ---
app.get("/api/vasche", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM vasche ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    console.error("Errore vasche:", error);
    res.status(500).json({ error: "Errore nel recupero delle vasche" });
  }
});

// --- API LOTTI (lettura lotti con JOIN vasche) ---
app.get("/api/lotti", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT l.*, v.codice AS vasca_codice
      FROM lotti l
      LEFT JOIN vasche v ON l.vasca_id = v.id
      ORDER BY l.id ASC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Errore lotti:", error);
    res.status(500).json({ error: "Errore nel recupero dei lotti" });
  }
});

app.listen(PORT, () => {
  console.log(`Server VineTrack avviato sulla porta ${PORT}`);
});
