import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import { Ingredient } from '../entities/ingredient/ingredient';

export class SeedIngredient1652362590765 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let ingrediente = new Ingredient();
    const ingredientRepository = getRepository(Ingredient);

    ingrediente.name = 'Guanciale';
    await ingredientRepository.save(ingrediente);

    ingrediente = new Ingredient();
    ingrediente.name = 'Pecorino romano';
    await ingredientRepository.save(ingrediente);

    ingrediente = new Ingredient();
    ingrediente.name = 'Pepe';
    await ingredientRepository.save(ingrediente);

    ingrediente = new Ingredient();
    ingrediente.name = 'Sale';
    await ingredientRepository.save(ingrediente);

    ingrediente = new Ingredient();
    ingrediente.name = 'Uova';
    await ingredientRepository.save(ingrediente);

    ingrediente = new Ingredient();
    ingrediente.name = 'Pasta';
    await ingredientRepository.save(ingrediente);

    ingrediente = new Ingredient();
    ingrediente.name = 'Panna';
    await ingredientRepository.save(ingrediente);

    ingrediente = new Ingredient();
    ingrediente.name = 'Pancetta';
    await ingredientRepository.save(ingrediente);

    ingrediente = new Ingredient();
    ingrediente.name = 'Zucchero';
    await ingredientRepository.save(ingrediente);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    console.log('Not implemented');
  }
}
