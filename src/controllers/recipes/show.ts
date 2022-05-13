import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { Recipes } from 'orm/entities/recipes/recipes';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const show = async (req: Request, res: Response, next: NextFunction) => {
  const recipesRepository = getRepository(Recipes);
  try {
    const { recipe_id } = req.params;
    const recipe = await recipesRepository
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
      .where('recipes.id = :id', { id: recipe_id })
      .getOne();

    if (!recipe) {
      const customError = new CustomError(404, 'General', `Recipe not found.`, null, null);
      return next(customError);
    }

    res.customSuccess(200, 'Show recipe', recipe);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't retrieve the recipe.`, null, err);
    return next(customError);
  }
};
