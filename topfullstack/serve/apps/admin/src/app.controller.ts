import { Controller, Get, Post, UseFilters, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @UseInterceptors(FileInterceptor('file')) //拦截器，表示你要去前端取得文件数据名是什么 这里是file
  @Post('upload')
  async upload( @UploadedFile('file') file){
    return file
  }

}
