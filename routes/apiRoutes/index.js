const express = require('express');
const router = express.Router();

// routers to connect to various Routes.js
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));
router.use(require('./voteRoutes'));

module.exports = router;