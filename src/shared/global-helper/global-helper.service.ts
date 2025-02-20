/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalHelperService {
    globalFunction():string {
        return 'Use Global Function';
    }
}
