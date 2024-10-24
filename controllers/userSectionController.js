const UserSection = require('../models/userSection');

// Get all user sections
const getUserSections = async (req, res) => {
    try {
        const userSections = await UserSection.findAll();
        res.json(userSections);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a user section by its id
const getUserSectionById = async (req, res) => {
    try {
        const userSection = await UserSection.findByPk(req.params.id);
        if (userSection) {
            res.json(userSection);
        } else {
            res.status(404).json({ message: 'UserSection not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new user section
const createUserSection = async (req, res) => {
    try {
        const newUserSection = await UserSection.create(req.body);
        res.status(201).json(newUserSection);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update user section details
const updateUserSection = async (req, res) => {
    try {
        const userSection = await UserSection.findByPk(req.params.id);
        if (userSection) {
            await userSection.update(req.body);
            res.json(userSection);
        } else {
            res.status(404).json({ message: 'UserSection not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a user section
const deleteUserSection = async (req, res) => {
    try {
        const userSection = await UserSection.findByPk(req.params.id);
        if (userSection) {
            await userSection.destroy();
            res.json({ message: 'UserSection deleted' });
        } else {
            res.status(404).json({ message: 'UserSection not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all user sections for a user
const getUserSectionsByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const userSections = await UserSection.findAll({
            where: { userId }
        });
        res.json(userSections);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete all user sections for a user (e.g., user account deletion)
const deleteUserSectionsByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await UserSection.destroy({
            where: { userId }
        });
        res.json({ message: `${result} user sections associated with user ${userId} deleted.` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getUserSections,
    getUserSectionById,
    createUserSection,
    updateUserSection,
    deleteUserSection,
    getUserSectionsByUserId,
    deleteUserSectionsByUserId
};