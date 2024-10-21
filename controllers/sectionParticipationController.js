const SectionParticipation = require('../models/sectionParticipation');

// Get all section participations
const getSectionParticipations = async (req, res) => {
    try {
        const sectionParticipations = await SectionParticipation.findAll();
        res.json(sectionParticipations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a section participation by its id
const getSectionParticipationById = async (req, res) => {
    try {
        const sectionParticipation = await SectionParticipation.findByPk(req.params.id);
        if (sectionParticipation) {
            res.json(sectionParticipation);
        } else {
            res.status(404).json({ message: 'SectionParticipation not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new section participation
const createSectionParticipation = async (req, res) => {
    try {
        const newSectionParticipation = await SectionParticipation.create(req.body);
        res.status(201).json(newSectionParticipation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update section participation details
const updateSectionParticipation = async (req, res) => {
    try {
        const sectionParticipation = await SectionParticipation.findByPk(req.params.id);
        if (sectionParticipation) {
            await sectionParticipation.update(req.body);
            res.json(sectionParticipation);
        } else {
            res.status(404).json({ message: 'SectionParticipation not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a section participation
const deleteSectionParticipation = async (req, res) => {
    try {
        const sectionParticipation = await SectionParticipation.findByPk(req.params.id);
        if (sectionParticipation) {
            await sectionParticipation.destroy();
            res.json({ message: 'SectionParticipation deleted' });
        } else {
            res.status(404).json({ message: 'SectionParticipation not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all section participations for a user
const getSectionParticipationsByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const sectionParticipations = await SectionParticipation.findAll({
            where: { userId }
        });
        res.json(sectionParticipations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete all section participations for a user (e.g., user account deletion)
const deleteSectionParticipationsByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await SectionParticipation.destroy({
            where: { userId }
        });
        res.json({ message: `${result} section participations associated with user ${userId} deleted.` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getSectionParticipations,
    getSectionParticipationById,
    createSectionParticipation,
    updateSectionParticipation,
    deleteSectionParticipation,
    getSectionParticipationsByUserId,
    deleteSectionParticipationsByUserId
};