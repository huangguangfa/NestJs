import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//模型注入
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { TypesModule } from './types/types.module';
import { WritingsModule } from './writings/writings.module';

//文件上传中间键
import { MulterModule } from '@nestjs/platform-express';
//阿里云oss上传
const MAO = require('multer-aliyun-oss');

@Module({
  imports: [
    MulterModule.register({
      // 阿里云 oss存储
      storage: MAO({
          config: {
              region: 'oss-cn-shenzhen', //存储区域
              accessKeyId: 'LTAI4Fs6Wkbm54dFS9FRHGoQ',
              accessKeySecret: 'RHuMCAnLxuWDZbFxywTrIxd6bb87aL',
              bucket: 'gf-blogs' //存储空间的名称
          }
      }),
      dest:'uploads' //本地存储路径
    }),
    DbModule,
    UsersModule,
    TypesModule,
    WritingsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
