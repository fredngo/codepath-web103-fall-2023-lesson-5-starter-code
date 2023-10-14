import { pool } from '../config/database.js'

// union - retrieve the names of all the hairstylists and users, even those
// that are not associated with any appointments, and combine them into a single list
const getPeople = async (req, res) => {
  const unionQuery = `
    SELECT name FROM users
    UNION
    SELECT name FROM hair_stylists
  `

  try {
    const results = await pool.query(unionQuery)
    res.status(200).json(results.rows)
  }
  catch (error) {
    res.status(400).json({ error: error.messages })
  }
}

export default {
  getPeople
}
