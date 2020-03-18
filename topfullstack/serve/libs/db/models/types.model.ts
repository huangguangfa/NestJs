import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Writings } from './writings.model'

@modelOptions({
    schemaOptions:{
        timestamps:true,  //加时间戳
    }
})
export class Type{  
    @prop() 
    @ApiProperty({description:'类别名称'})
    name:string

    @prop()
    @ApiProperty({description:'类别图片'})
    imgUrl:string
    
    @prop()
    @ApiProperty({description:'备注',example:''})
    remark:string

    @arrayProp({itemsRef:'Writings'})
    writings:Ref<Writings>[]
    
}