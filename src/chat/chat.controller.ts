/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService:UtilityService,
                private readonly globalhelperService: GlobalHelperService
    ){}
    
    @Get('/shared')
    chatFunction():string {
        return this.chatService.shareFunction();
    }

    @Get('/global')
    globalFunction():string {
        return this.globalhelperService.globalFunction();
    }
}
