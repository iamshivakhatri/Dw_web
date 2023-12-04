import express from 'express'
import cors from 'cors'
 import { pool } from "./database.js"
// import tripRoutes from './routes/trips.js'


const app = express()

app.use(express.json())
app.use(cors())


app.use('/api/trueclaims', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM claim WHERE rejected = false'); // Replace with your actual table name
  
      const claims = result.rows;
      client.release();
  
      res.json(claims);
    } catch (error) {
      console.error('Error fetching claims:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.use('/api/falseclaims', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM claim WHERE rejected = true'); // Replace with your actual table name
  
      const claims = result.rows;
      client.release();
  
      res.json(claims);
    } catch (error) {
      console.error('Error fetching claims:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">✈️ Server for apis  </h1>')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


