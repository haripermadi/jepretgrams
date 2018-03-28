var express = require('express');
var router = express.Router();
var multer = require('multer');
const {getPhoto, postPhoto, removePhoto, updateCaption} = require('../controllers/photoController')
const {sendUploadToGCS} = require('../middleware/uploadGCS')
const {authUser} = require('../middleware/auth')

const upload = multer({
  storage:multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
})

router.get('/', getPhoto)
router.post('/',postPhoto)
// router.post('/',upload.single('image'),sendUploadToGCS,postPhoto)
router.put('/:id', updateCaption)
router.delete('/:id',removePhoto)

module.exports = router;
