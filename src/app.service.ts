import { Injectable } from '@nestjs/common';

const arr = [{location: {latitude: 50.491204, longitude: 30.467220}, name: 'event', image: 'https://picsum.photos/seed/picsum/200/300' }]

@Injectable()
export class AppService {
  getAll(): any {
    return arr;
  }

  createEvent(data): any {
    const result = data;
    result.name = result.name + arr.length;
    arr.push(result)
    return arr;
  }

}
