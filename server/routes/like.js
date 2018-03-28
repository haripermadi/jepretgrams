var express = require('express');
var router = express.Router();
const {getLike, postLike} = require('../controllers/likephotoController')
/* GET users listing. */

router.get('/', getLike)
router.post('/', postLike)

module.exports = router;
