import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

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
