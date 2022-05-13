import { Request, Response, NextFunction } from 'express';
import { getRepository, getManager } from 'typeorm';

import { Ingredients } from 'orm/entities/ingredients/ingredients';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const edit = async (req: Request, res: Response, next: NextFunction) => {
  const ingredientsRepository = getRepository(Ingredients);
  const ingredientsManager = getManager();

  try {
    const { recipe_id, ingredients_id } = req.params;

    const isIngredients = await ingredientsRepository.find({
      where: { recipe_id: recipe_id, ingredient_id: ingredients_id },
    });

    //OPTION2 RAW
    // const isIngredients = await ingredientsManager.query(
    //   `SELECT * FROM ingredients AS ing WHERE ing.recipe_id = ${recipe_id} AND ing.ingredient_id = ${ingredients_id}`,
    // );

    const { new_ingredient } = req.body;
    if (isIngredients.length < 1) {
      const customError = new CustomError(404, 'General', `No ingredient found.`, null, null);
      return next(customError);
    }

    isIngredients[0].ingredient_id = new_ingredient;
    await ingredientsRepository.save(isIngredients);

    res.customSuccess(200, null, isIngredients);
  } catch (err) {
    const customError = new CustomError(400, 'Raw', `Can't edit ingredient.`, null, err);
    return next(customError);
  }
};
