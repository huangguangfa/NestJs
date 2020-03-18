import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from '../models/user.model';
import { Type } from '../models/types.model';
import { Writings } from '../models/writings.model';

const models = TypegooseModule.forFeature([
  User,
  Type,
  Writings,
])

@Global()
@Module({
  imports:[
    TypegooseModule.forRoot(
      'mongodb://localhost/guangfaBlog',{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
