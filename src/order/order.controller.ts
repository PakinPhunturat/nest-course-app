/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: UtilityService,
                private readonly globalHelperService: GlobalHelperService
    ){}

    @Get('/shared')
    orderFunction():string {
        return this.orderService.shareFunction();
    }

    @Get('/global')
    globalFunction():string {
        return this.globalHelperService.globalFunction();
    }
}
