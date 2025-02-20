import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We Love Pay Gorn';
  }

  getName(): string {
    return 'Buzz Popme';
  }

  getInfo(): string {
    return 'Hello, I am Pakin Phunturat, 18 Years old';
  }

  getJSON() {
    return {
      name: 'Pakin',
      lastname: 'Phunturat',
      age: 18,
    };
  }

  testGIT(): string {
    return 'Git and GitHub using';
  }

  testPM(): string {
    return 'We Use Postman';
  }
}
