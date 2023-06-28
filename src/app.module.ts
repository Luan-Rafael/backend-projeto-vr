import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from './modules/course.module';
import { RegisterModule } from './modules/register.module';
import { UserModule } from './modules/user.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "Luan.2812",
        "database": "postgres",
        "autoLoadEntities": true,
        "synchronize": true
      }
    ),
    CourseModule,
    UserModule,
    RegisterModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
