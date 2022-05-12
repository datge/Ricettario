import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Ingredients } from '../entities/ingredients/ingredients';

export class SeedIngredients1652363808236 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let ing = new Ingredients();
    const ingredientsRepository = getRepository(Ingredients);

    // suppongo che gli id siano in ordine prima del seed

    ing.recipe_id = 1; // carbonara
    ing.ingredient_id = 6; //pasta
    await ingredientsRepository.save(ing);

    ing = new Ingredients();
    ing.recipe_id = 1;
    ing.ingredient_id = 1; //guanciale
    await ingredientsRepository.save(ing);

    ing = new Ingredients();
    ing.recipe_id = 1;
    ing.ingredient_id = 3; //pepe
    await ingredientsRepository.save(ing);

    ing = new Ingredients();
    ing.recipe_id = 1;
    ing.ingredient_id = 2; //pecorino
    await ingredientsRepository.save(ing);

    ing = new Ingredients();
    ing.recipe_id = 1;
    ing.ingredient_id = 5; //uova
    await ingredientsRepository.save(ing);

    ing = new Ingredients();
    ing.recipe_id = 2; // gricia
    ing.ingredient_id = 6; //pasta
    await ingredientsRepository.save(ing);

    ing = new Ingredients();
    ing.recipe_id = 2;
    ing.ingredient_id = 1; //guanciale
    await ingredientsRepository.save(ing);

    ing = new Ingredients();
    ing.recipe_id = 2;
    ing.ingredient_id = 3; //pepe
    await ingredientsRepository.save(ing);

    ing = new Ingredients();
    ing.recipe_id = 2;
    ing.ingredient_id = 2; //pecorino
    await ingredientsRepository.save(ing);

    ing = new Ingredients();
    ing.recipe_id = 3; // cacio e pepe
    ing.ingredient_id = 6; //pasta
    await ingredientsRepository.save(ing);

    ing = new Ingredients();
    ing.recipe_id = 3;
    ing.ingredient_id = 3; //pepe
    await ingredientsRepository.save(ing);

    ing = new Ingredients();
    ing.recipe_id = 3;
    ing.ingredient_id = 2; //pecorino
    await ingredientsRepository.save(ing);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    console.log('Not implemented');
  }
}
