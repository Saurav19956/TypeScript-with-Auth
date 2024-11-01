import multer,{StorageEngine} from "multer";
import path from "path";

const directoryPath = 'uploads/';

const storage: StorageEngine = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, directoryPath);

    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    },
});

const upload = multer({storage: storage});
export default upload;
