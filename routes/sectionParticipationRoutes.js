const express = require('express');
const { getSectionParticipations, getSectionParticipationById, createSectionParticipation, updateSectionParticipation, deleteSectionParticipation, getSectionParticipationsByUserId, deleteSectionParticipationsByUserId } = require('../controllers/sectionParticipationController');
const router = express.Router();

// Define routes for SectionParticipation resource
router.get('', getSectionParticipations);
router.get('/:id', getSectionParticipationById);
router.post('', createSectionParticipation);
router.put('/:id', updateSectionParticipation);
router.delete('/:id', deleteSectionParticipation);
router.get('/users/:userId', getSectionParticipationsByUserId);
router.delete('/users/:userId', deleteSectionParticipationsByUserId);

module.exports = router;