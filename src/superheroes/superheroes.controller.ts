import { Body, Controller, Get, Post } from '@nestjs/common';
import { Superhero, SuperheroesService } from './superheroes.service';

@Controller()
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Get('superheroes')
  findAllSuperheroes(): Array<Superhero> {
    return this.superheroesService.findAllSuperheroes();
  }

  @Post('superheroes')
  createSuperhero(@Body() superhero: Superhero): string {
    return this.superheroesService.addSuperhero(superhero);
  }
}
