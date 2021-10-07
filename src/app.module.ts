import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(path.join(process.cwd(), './www')),
      exclude: [],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
