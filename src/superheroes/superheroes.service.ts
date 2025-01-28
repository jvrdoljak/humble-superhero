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
    const fileData = readFileSync(dataFilePath, 'utf-8');
    if (!fileData) return [];
    const superheroes: Array<Superhero> = JSON.parse(fileData) as Array<Superhero>;

    return superheroes.sort((a, b) => {
      return b.humilityScore - a.humilityScore;
    });
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
