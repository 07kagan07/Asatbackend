import { BaseEntity } from '../base-entity';
import { Column, CreateDateColumn, Entity } from 'typeorm';

@Entity('meals')
export class Meals extends BaseEntity {
  @CreateDateColumn()
  date: Date;

  @Column({ type: 'varchar', length: 100, nullable: false })
  day: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  meal: string;
}

@Entity('kullanicilar')
export class Kullanici extends BaseEntity {
  @Column({ type: 'varchar', length: 200, nullable: false })
  firstName: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  secondName: string;
}
