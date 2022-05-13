import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';

import { Ingredient } from 'orm/entities/ingredient/ingredient';
import { Recipes } from 'orm/entities/recipes/recipes';
@Entity('ingredients')
export class Ingredients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  recipe_id: number;

  @Column({
    nullable: false,
  })
  ingredient_id: number;

  @ManyToOne(() => Recipes, (recipe) => recipe.ingredients)
  recipe: Recipes;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.ingredients)
  ingredient: Ingredient;

  @Column({
    default: 1,
  })
  qtty: number;

  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Column()
  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  @DeleteDateColumn()
  deleted_at: Date;
}
