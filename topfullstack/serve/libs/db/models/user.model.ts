import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'


@modelOptions({
    schemaOptions:{
        timestamps:true,  //加时间戳
    }
})
export class User{
    @prop() //告诉typegoose数据库字段
    @ApiProperty({description:'用户名',example:'admin'})
    username:string

    @prop()
    id:number

    @prop()
    @ApiProperty({description:'密码',example:'123456'})
    password:string
}


