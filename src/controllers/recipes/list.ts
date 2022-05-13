import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Recipes } from 'orm/entities/recipes/recipes';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const list = async (req: Request, res: Response, next: NextFunction) => {
  const recipesRepository = getRepository(Recipes);
  try {
    const recipes = await recipesRepository
      .createQueryBuilder('recipes')
      .select(['recipes.id', 'recipes.name'])
      .leftJoin('recipes.ingredients', 'ingredients')
      .leftJoin('ingredients.ingredient', 'ingredient')
      .addSelect([
        'ingredients.id',
        'ingredients.qtty',
        'ingredients.created_at',
        'ingredients.updated_at',
        'ingredient.name',
      ])
      .getMany();
    res.customSuccess(200, 'List of recipes with ingredients', recipes);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve list of recipes.`, null, err);
    return next(customError);
  }
};
