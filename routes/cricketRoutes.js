const express = require('express');
// const router = express();
const router = express.Router();
const multer = require('multer');
router.use(express.json())



const { cricket_post , cricket_get , cricket_edit , cricket_delete, cricketProfile} = require('../controllers/cricketControllers');

const storage = multer.diskStorage({
    destination : './public/cricketProfile',
    filename : function (req , file , cb){
        cb(null, file.originalname + Date.now())
    }
});

const upload = multer({storage : storage});

const singleUpload = upload.single('profilePic');

router.post('/cricket_post',cricket_post )
router.get('/cricket_get', cricket_get )
router.put('/cricket_edit/:id', cricket_edit )
router.delete('/cricket_delete/:id',cricket_delete )

router.post('/profile', singleUpload, cricketProfile )

module.exports = router;
