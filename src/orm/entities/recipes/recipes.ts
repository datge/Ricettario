import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

import { Ingredients } from 'orm/entities/ingredients/ingredients';
@Entity('recipes')
export class Recipes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
  })
  name: string;

  @Column({
    nullable: true,
  })
  image: string;

  @OneToMany(() => Ingredients, (ingredient) => ingredient.recipe)
  ingredients: Ingredients[];

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
