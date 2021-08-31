import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'remotemysql.com',
      port: 3306,
      username: 'mHKd2hlIRp',
      password: '2pXn6Yye8B',
      database: 'mHKd2hlIRp',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}