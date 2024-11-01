import express from 'express';
import { getFileUploadForm, uploadFile } from '../controllers/multerController';
import upload from '../configs/multerConfig';

const router = express.Router();

router.get('/', getFileUploadForm);
router.post('/upload', upload.single('file'), uploadFile);

export default router;
