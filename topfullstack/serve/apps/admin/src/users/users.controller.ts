import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from 'libs/db/models/user.model';
import { Crud } from 'utils/crud/main';
import { ApiTags } from '@nestjs/swagger';
@Crud({
    model:User  //指向模型
})

@Controller('users')
@ApiTags('用户管理')
export class UsersController {
    constructor(@InjectModel(User) private readonly model){}  //注入模型
}
