import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): any {
    return this.appService.getAll();
  }

  @Post()
  createNew(@Body() body): any {
    return this.appService.createEvent(body);
  }
}
