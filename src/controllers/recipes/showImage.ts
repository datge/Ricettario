import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Recipes } from 'orm/entities/recipes/recipes';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const showImage = async (req: Request, res: Response, next: NextFunction) => {
  const recipesRepository = getRepository(Recipes);
  try {
    const { recipe_id } = req.params;
    const recipe = await recipesRepository.findOne({ where: { id: recipe_id }, select: ['image'] });

    if (!recipe) {
      const customError = new CustomError(404, 'General', `Recipe not found.`, null, null);
      return next(customError);
    }

    //inviando solamente il base64 dell'img
    const base64 = recipe.image.toString();
    res.send(base64);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve the recipe.`, null, err);
    return next(customError);
  }
};
