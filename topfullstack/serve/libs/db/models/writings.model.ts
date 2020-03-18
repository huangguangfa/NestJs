import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'


@modelOptions({
    schemaOptions:{
        timestamps:true,  //加时间戳
    }
})
export class Writings{  
    @prop() 
    @ApiProperty({description:'文章标题'})
    title:string

    @prop()
    @ApiProperty({description:'文章内容'})
    content:string
    
    @prop()
    @ApiProperty({description:'类型名称',example:''})
    typeName:string
    
    @prop()
    @ApiProperty({description:'备注',example:''})
    remark:string

    
}