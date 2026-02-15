const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const pool = new Pool({
  user: 'myuser',
  host: 'localhost',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5433,   // IMPORTANT (Docker port)
});

// TEST ROUTE (Very Important)
app.get('/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database connection failed');
  }
});

app.get('/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
});

app.post('/users', async (req, res) => {
  const { name, stack } = req.body;
  const result = await pool.query(
    'INSERT INTO users (name, stack) VALUES ($1, $2) RETURNING *',
    [name, stack]
  );
  res.json(result.rows[0]);
});

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, stack } = req.body;
  const result = await pool.query(
    'UPDATE users SET name = $1, stack = $2 WHERE id = $3 RETURNING *',
    [name, stack, id]
  );
  res.json(result.rows[0]);
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM users WHERE id = $1', [id]);
  res.json({ message: 'User deleted' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
