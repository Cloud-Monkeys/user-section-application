const express = require('express');
const { getUserSections, createUserSection, getUserSectionById, updateUserSection, deleteUserSection, getUserSectionsByUserId, deleteUserSectionsByUserId } = require('../controllers/userSectionController');
const router = express.Router();

// Define routes for UserSection resource
router.get('', getUserSections);
router.get('/:id', getUserSectionById);
router.post('', createUserSection);
router.put('/:id', updateUserSection);
router.delete('/:id', deleteUserSection);
router.get('/users/:userId', getUserSectionsByUserId);
router.delete('/users/:userId', deleteUserSectionsByUserId);

module.exports = router;