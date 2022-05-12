import fs from 'fs';
import path from 'path';

import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Recipes } from '../entities/recipes/recipes';

export class SeedRecipe1652362593678 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let recipes = new Recipes();
    const recipesRepository = getRepository(Recipes);

    const imagePath = path.join(__dirname, 'pasta.png');
    const cont = fs.readFileSync(imagePath, { encoding: 'base64' });

    recipes.name = 'Carbonara';
    recipes.image = cont;
    await recipesRepository.save(recipes);

    recipes = new Recipes();
    recipes.name = 'Gricia';
    recipes.image = cont;
    await recipesRepository.save(recipes);

    recipes = new Recipes();
    recipes.name = 'Cacio e Pepe';
    recipes.image = cont;
    await recipesRepository.save(recipes);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    console.log('Not implemented');
  }
}
