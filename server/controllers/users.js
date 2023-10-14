import { pool } from '../config/database.js'

const getUsers = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM users ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json( {error: error.message} )
    }
}

const getUserById = async (req, res) => {
    try {
        const userId = parseInt(req.params.id)
        const results = await pool.query('SELECT * FROM users WHERE id=$1', [userId])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(400).json( {error: error.message} )
    }
}

// inner join - retrieve all the appointments for a specific user and include
// information about the hairstyle and hair stylist for each appointment


export default {
    getUsers,
    getUserById
}