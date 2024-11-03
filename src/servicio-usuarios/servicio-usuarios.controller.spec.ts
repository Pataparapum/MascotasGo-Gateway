import { Test, TestingModule } from '@nestjs/testing';
import { ServicioUsuariosController } from './servicio-usuarios.controller';

describe('ServicioUsuariosController', () => {
  let controller: ServicioUsuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicioUsuariosController],
    }).compile();

    controller = module.get<ServicioUsuariosController>(ServicioUsuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
