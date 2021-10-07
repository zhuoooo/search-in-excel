import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/list')
  getExcel () {
    return this.appService.getExcel()
  }

  @Get('/search')
  search (@Query('search') search: string = '') {

    return this.appService.search(search.toString())
  }
}
