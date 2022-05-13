import { Router } from 'express';

const router = Router();
import { list, show, showImage } from 'controllers/recipes';

import ingredients from './ingredients';

router.get('/', list);
router.get('/:recipe_id([0-9]+)', show);
router.get('/:recipe_id([0-9]+)/image', showImage);
router.use('/:recipe_id([0-9]+)/ingredients', ingredients);

export default router;
