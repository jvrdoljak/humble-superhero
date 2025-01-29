import {
  BadRequestException,
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { Superhero, SuperheroesService } from './superheroes.service';

@Controller()
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  /**
   *
   * @returns All superheroes in the database
   */
  @Get('superheroes')
  findAllSuperheroes(): Array<Superhero> {
    const superheroes = this.superheroesService.findAllSuperheroes();

    if (superheroes.length == 0) {
      throw new NotFoundException('Data is not found.');
    }

    return superheroes;
  }

  /**
   *
   * @param superhero
   * @returns Creates a new superhero
   */
  @Post('superheroes')
  createSuperhero(@Body() superhero: Superhero): string {
    if (superhero.humilityScore > 10 || superhero.humilityScore < 0) {
      throw new BadRequestException('HumilityScore is out of range 1-10.');
    }

    if (this.superheroesService.addSuperhero(superhero)) {
      return 'Superhero is successfully created.';
    }

    throw new InternalServerErrorException('Something went wrong');
  }
}
