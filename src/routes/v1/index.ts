import { Router } from 'express';

import recipes from './recipes';
const router = Router();

router.use('/recipes', recipes);
export default router;
