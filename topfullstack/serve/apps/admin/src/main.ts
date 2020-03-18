import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ cors: true });
  const options = new DocumentBuilder()
    .setTitle('广发博客接口文档---后台管理')
    .setDescription('于2020年3月8号')
    .setVersion('1.0')
    .addTag('博客文档')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs--admin-blogs', app, document);

  await app.listen(3000);
  console.log('http://localhost:3000/api-docs--admin-blogs')
}
bootstrap();
