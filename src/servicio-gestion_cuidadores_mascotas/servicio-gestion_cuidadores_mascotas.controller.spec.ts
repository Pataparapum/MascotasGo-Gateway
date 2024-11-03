import { Test, TestingModule } from '@nestjs/testing';
import { ServicioGestionCuidadoresMascotasController } from './servicio-gestion_cuidadores_mascotas.controller';

describe('ServicioGestionCuidadoresMascotasController', () => {
  let controller: ServicioGestionCuidadoresMascotasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicioGestionCuidadoresMascotasController],
    }).compile();

    controller = module.get<ServicioGestionCuidadoresMascotasController>(ServicioGestionCuidadoresMascotasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
