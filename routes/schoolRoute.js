const express = require('express');
const router = express.Router();
const { getListOfSchools } = require('../controllers/schoolController');

router.get('/listSchools',getListOfSchools);

module.exports = router;