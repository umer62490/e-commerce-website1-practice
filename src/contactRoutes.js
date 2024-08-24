// src/contactRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Your route logic for contact
    res.send('Contact Us Page');
});

module.exports = router;