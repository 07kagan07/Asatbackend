import { PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn({})
  id: number;

  // day: string;
  //   @CreateDateColumn({ nullable: true })
  //   datemeal?: Date;
  //meal: string;
}
