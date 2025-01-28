import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

describe('AppController', () => {
  let superheroesController: SuperheroesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    superheroesController = app.get<SuperheroesController>(
      SuperheroesController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(superheroesController.findAllSuperheroes()).toBe('Hello World!');
    });
  });
});
