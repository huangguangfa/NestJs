import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Writings } from 'libs/db/models/writings.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'utils/crud/main';
import { ApiTags } from '@nestjs/swagger';

@Controller('writings')
@ApiTags('文章管理')
@Crud({
    model:Writings
})
export class WritingsController {
    constructor( @InjectModel(Writings) private readonly model:ReturnModelType<typeof Writings>){}
}
