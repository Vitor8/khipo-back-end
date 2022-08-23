import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
  
@Entity()
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ name: 'name', nullable: false })
  name: string;
  
  @Column({ name: 'price', nullable: false })
  price: string;
  
  @Column({ name: 'brand', nullable: false })
  brand: string;
  
  @Column({ name: 'image', nullable: false })
  image: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
  