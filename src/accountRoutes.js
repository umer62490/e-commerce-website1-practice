// src/accountRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Your route logic for account
    res.send('Account Page');
});

module.exports = router;