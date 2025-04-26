import express from 'express';
import { sendMessage } from '../controllers/messageController';

const router = express.Router();

router.post('/send-message', sendMessage);

export default router;