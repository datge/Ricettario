import { Router } from 'express';

import { edit } from 'controllers/recipes/ingredients';
const router = Router({ mergeParams: true });

router.patch('/:ingredients_id([0-9]+)', edit);
export default router;
