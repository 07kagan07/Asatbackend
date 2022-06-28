import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Kullanici, Meals } from './meals/meals.entity';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: '180254005',
  port: 5432,
  host: '127.0.0.1',
  database: 'yemekhane',
  entities: [Meals, Kullanici],
  synchronize: true,
  //entities: ['~/dist/**/*.entites.ts'],
};
