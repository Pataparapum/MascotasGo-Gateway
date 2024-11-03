import { Test, TestingModule } from '@nestjs/testing';
import { ServicioGestionVeterinariaController } from './servicio-gestion-veterinaria.controller';

describe('ServicioGestionVeterinariaController', () => {
  let controller: ServicioGestionVeterinariaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicioGestionVeterinariaController],
    }).compile();

    controller = module.get<ServicioGestionVeterinariaController>(ServicioGestionVeterinariaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
