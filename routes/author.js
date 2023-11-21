// routes/author.js

const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author'); 


router.post('/', authorController.createAuthor);



module.exports = router;
