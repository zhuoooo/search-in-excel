import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as open from 'open';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  await open('http://localhost:3000/index.html');
  console.log('使用浏览器访问：http://localhost:3000/index.html')
  console.log('本程序关闭后，自动销毁端口监听服务，不需要额外操作。')
}
bootstrap();
