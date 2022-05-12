import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRecipe1652362524619 implements MigrationInterface {
  name = 'CreateRecipe1652362524619';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "recipes" (
        "id" SERIAL NOT NULL, 
        "name" character varying(45) NOT NULL, 
        "image" bytea, 
        "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMP,
        CONSTRAINT "UQ_name_recipe" UNIQUE ("name"), 
        CONSTRAINT "PK_id_recipe" PRIMARY KEY ("id"))`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "recipes"`, undefined);
  }
}
