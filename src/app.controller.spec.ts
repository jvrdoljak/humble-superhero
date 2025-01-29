import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHelp()).toBe(
        '<p>Hello! This app has two endpoints:<br /> <br /> \
    <strong>POST /superheroes </strong>: Add a new superhero (name, superpower, and humility score required).<br/> \
    <strong>GET /superheroes</strong>: Fetch the list of superheroes sorted by humility score.'
      );
    });
  });
});
