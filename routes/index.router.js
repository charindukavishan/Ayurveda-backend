const express = require('express');
const router = express.Router();

const ctrlKnowledge = require('../controllers/knowledge_base');

router.post('/saveKnowladePost', ctrlKnowledge.saveKnowledge);
router.get('/allPosts', ctrlKnowledge.allKnowledge);



module.exports = router;