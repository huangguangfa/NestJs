import { Module } from '@nestjs/common';
import { WritingsController } from './writings.controller';

@Module({
  controllers: [WritingsController]
})
export class WritingsModule {}
