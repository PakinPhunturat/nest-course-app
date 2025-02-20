/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService,
                private readonly utilityService: UtilityService,
                private readonly globalhelperService: GlobalHelperService
        ){}

        @Get('/shared')
        sharedFunction():string{
            return this.utilityService.shareFunction();
        }

        @Get('/global')
        globalFunction():string {
            return this.globalhelperService.globalFunction();
        }
}
