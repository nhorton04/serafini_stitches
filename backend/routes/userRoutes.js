import express from 'express';
const router = express.Router();

import { authUser } from '../controllers/userController.js';
const router = express.Router();

router.post('/login', authUser);

export default router;
