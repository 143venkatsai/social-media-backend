const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) =>{
    const allowedTypes = /jpeg|jpg|png|gif/;
    const mimeType = allowedTypes.test(file.mimetype);
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    if (extName && mimeType) {
        cb(null, true);
    } else {
        cb(new Error("Error: Images Only!"));
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits:{fileSize: 5 * 1024 * 1024}
});

module.exports = upload;