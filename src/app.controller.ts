import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/showname')
  getName(): string {
    return this.appService.getName();
  }

  @Get('/showinformation')
  getInfo(): string {
    return this.appService.getInfo();
  }

  @Get('/showJSON')
  getJSON(){
    return this.appService.getJSON();
  }
}
