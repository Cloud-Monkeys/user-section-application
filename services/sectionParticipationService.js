const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Create a new section participation (student registers or professor is assigned)
router.post('', async (req, res) => {
    const { user_id, section_id } = req.body;
    const query = 'INSERT INTO section_participations (user_id, section_id) VALUES (?, ?)';
    try {
        const [results] = await db.query(query, [user_id, section_id]);
        res.status(201).json({ id: results.insertId, user_id, section_id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a section participation
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { user_id, section_id } = req.body;
    const query = 'UPDATE section_participations SET user_id = ?, section_id = ? WHERE id = ?';
    try {
        const [results] = await db.query(query, [user_id, section_id, id]);
        res.json({ message: `${results.affectedRows} section participation found. ${results.changedRows} section participation updated successfully.` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a section participation
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM section_participations WHERE id = ?';
    try {
        const [results] = await db.query(query, [id]);
        res.json({ message: `${results.affectedRows} section participation deleted successfully.` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all section participations
router.get('', async (req, res) => {
    const query = 'SELECT * FROM section_participations';
    try {
        const [results] = await db.query(query);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a section participation by its id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM section_participations WHERE id = ?';
    try {
        const [results] = await db.query(query, [id]);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all section participations for a user
router.get('/users/:userId', async (req, res) => {
    const { userId } = req.params;
    const query = 'SELECT * FROM section_participations WHERE user_id = ?';
    try {
        const [results] = await db.query(query, [userId]);
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete all section participations for a user (e.g., user account deletion)
router.delete('/users/:userId', async (req, res) => {
    const { userId } = req.params;
    const query = 'DELETE FROM section_participations WHERE user_id = ?';
    try {
        const [results] = await db.query(query, [userId]);
        res.json({ message: `${results.affectedRows} section participations associated with user ${userId} deleted successfully.` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;