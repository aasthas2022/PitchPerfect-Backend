/**
 * routes.js
 * 
 * This module defines the routing for the server's API endpoints. It imports the necessary 
 * endpoint handlers and assigns them to specific routes using an Express router. The routes 
 * are then exported to be used in the main server file.
 */

const express = require('express');
const { generateCoverLetter } = require('./routes/generateCoverLetter');
const { liveCheck } = require('./routes/livecheck');

const router = express.Router();

router.get('/livecheck', liveCheck);
router.post('/generateCoverLetter', generateCoverLetter);

module.exports = router;
