/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService,
                private readonly utilityService: UtilityService,
                private readonly globalhelperService: GlobalHelperService
    ){}

    @Get('/global')
    globalFunction():string{
        return this.globalhelperService.globalFunction();
    }

    @Get('/shared')
    sharedFunction(): string{
        return this.utilityService.shareFunction();
    }

    @Get()
    productFunction(): string {
        return this.productService.productFunction();
    }

    @Get('/productJSON')
    myProduct(){
        return this.productService.productJSON();
    }
}
