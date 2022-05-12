import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateIngredient1652362554497 implements MigrationInterface {
  name = 'CreateIngredient1652362554497';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ingredient" (
        "id" SERIAL NOT NULL,
        "name" character varying(45) NOT NULL,
        "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
        "deleted_at" TIMESTAMP,
        CONSTRAINT "PK_id_ingredient" PRIMARY KEY ("id"))`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "ingredient"`, undefined);
  }
}
