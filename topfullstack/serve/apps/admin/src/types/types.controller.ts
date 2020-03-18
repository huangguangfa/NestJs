import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'utils/crud/main';
import { Type } from 'libs/db/models/types.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('types')
@ApiTags('类型列表')
@Crud({
    model:Type
})
export class TypesController {
    constructor(@InjectModel(Type) private readonly model:ReturnModelType<typeof Type> ){}  //注入模型
}

