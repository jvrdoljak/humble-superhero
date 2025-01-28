import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';

export interface Superhero {
  name: string;
  superpower: string;
  humilityScore: 10;
}

const dataFilePath = './superheroes_data/superheroes.json';

@Injectable()
export class SuperheroesService {
  findAllSuperheroes(): Array<Superhero> {
    const file = readFileSync(dataFilePath, 'utf-8');
    if (!file) return [];
    const superheroes: Array<Superhero> = JSON.parse(file) as Array<Superhero>;

    return superheroes;
  }

  addSuperhero(superhero: Superhero): boolean {
    const file = readFileSync(dataFilePath, 'utf-8');
    if (!file) return false;
    const superheroes: Array<Superhero> = JSON.parse(file) as Array<Superhero>;
    superheroes.push(superhero);

    writeFileSync(dataFilePath, JSON.stringify(superheroes), 'utf-8');

    return true;
  }
}
