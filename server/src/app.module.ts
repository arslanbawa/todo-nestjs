import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UserSchema } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/todos'),
    MongooseModule.forFeature([{name:'user',schema:UserSchema}])

  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
