import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productFunction(): string {
    return ' Hello From Product Service ';
  }

  productJSON() {
    return {
      name: 'Pakin Phunturat',
      age: 18,
      hobby: 'sleeping',
    };
  }
}
