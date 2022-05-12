import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateIngredients1652362571905 implements MigrationInterface {
  name = 'CreateIngredients1652362571905';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ingredients" (
        "id" SERIAL NOT NULL,
        "recipe_id" integer NOT NULL,
        "ingredient_id" integer NOT NULL,
        "qtty" integer NOT NULL DEFAULT 1,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMP,
        CONSTRAINT "PK_id_ingredients" PRIMARY KEY ("id"),
        CONSTRAINT "fk_recipe_id" FOREIGN KEY("recipe_id") REFERENCES "recipes"("id") ON DELETE CASCADE,
        CONSTRAINT "fk_ingredient_id" FOREIGN KEY("ingredient_id") REFERENCES "ingredient"("id") ON DELETE CASCADE)`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "ingredients"`, undefined);
  }
}
