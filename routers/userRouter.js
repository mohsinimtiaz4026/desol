const route = require('express').Router();
const userController = require('../controllers/userController');
const UPLOAD_FILES_DIR = "./uploads";
const multer = require('multer');
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, UPLOAD_FILES_DIR);
  },
// in case you want to change the names of your files)
  filename(req, file = {}, cb) {
    file.mimetype = "audio/webm";
    // console.log(req)
    const {originalname} = file;
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
    cb(null, `${Date.now()}${fileExtension}`);
  }
});
const upload = multer({storage});
route.post('/loginUser',userController.userLogin);
route.post('/pictures',upload.array('files',10),userController.picUpload);


module.exports = route; 