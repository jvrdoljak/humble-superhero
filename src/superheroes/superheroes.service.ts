import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';

export interface Superhero {
  name: string;
  superpower: string;
  humilityScore: 10;
}

@Injectable()
export class SuperheroesService {
  findAllSuperheroes(): Array<Superhero> {
    const file = readFileSync('./superheroes_data/superheroes.json', 'utf-8');
    const superheroes: Array<Superhero> = JSON.parse(file) as Array<Superhero>;

    return superheroes;
  }

  addSuperhero(superhero: Superhero): string {
    const file = readFileSync('./superheroes_data/superheroes.json', 'utf-8');
    const superheroes: Array<Superhero> = JSON.parse(file) as Array<Superhero>;
    superheroes.push(superhero);

    writeFileSync(
      './superheroes_data/superheroes.json',
      JSON.stringify(superheroes),
      'utf-8',
    );

    return 'Superhero is successfully created.';
  }
}
