import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesController', () => {
  let superheroesController: SuperheroesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [SuperheroesService],
    }).compile();

    superheroesController = app.get<SuperheroesController>(SuperheroesController);
  });

  describe('root', () => {
    it('should return correct data', () => {
      expect(superheroesController.findAllSuperheroes()).toEqual(
        expect.objectContaining([{ name: 'John Doe', superpower: 'support', humilityScore: '10' }])
      );
    });
    it('should return correct message', () => {
      expect(
        superheroesController.createSuperhero({
          name: 'Test',
          superpower: 'Test',
          humilityScore: 9,
        })
      ).toBe('Superhero is successfully created.');
    });
  });
});
