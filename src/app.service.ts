import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<p>Hello! This app has two endpoints:<br /> <br /> \
    <strong>POST /superheroes </strong>: Add a new superhero (name, superpower, and humility score required).<br/> \
    <strong>GET /superheroes</strong>: Fetch the list of superheroes sorted by humility score.';
  }
}
