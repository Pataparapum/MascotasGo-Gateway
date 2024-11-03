import { Test, TestingModule } from '@nestjs/testing';
import { ServicioAuthController } from './servicio-auth.controller';

describe('ServicioAuthController', () => {
  let controller: ServicioAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicioAuthController],
    }).compile();

    controller = module.get<ServicioAuthController>(ServicioAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
