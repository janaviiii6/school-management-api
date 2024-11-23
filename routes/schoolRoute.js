const express = require('express');
const router = express.Router();
const { getListOfSchools, addSchool } = require('../controllers/schoolController');

//Route for fetching all school records
router.get('/listSchools',getListOfSchools);

//Route for adding school
router.post('/addSchool',addSchool);

module.exports = router;