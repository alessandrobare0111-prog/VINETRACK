import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// Carica variabili ambiente
dotenv.config();

const { Pool } = pg;

// Connessione al database PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// TEST: verifica che il database risponde
app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ status: "ok", time: result.rows[0].now });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Errore connessione database" });
  }
});

// Home API
app.get("/", (req, res) => {
  res.send("VineTrack backend attivo!");
});

app.listen(PORT, () => {
  console.log(`Server VineTrack avviato sulla porta ${PORT}`);
});
