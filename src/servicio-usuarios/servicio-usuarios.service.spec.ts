import { Test, TestingModule } from '@nestjs/testing';
import { ServicioUsuariosService } from './servicio-usuarios.service';

describe('ServicioUsuariosService', () => {
  let service: ServicioUsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicioUsuariosService],
    }).compile();

    service = module.get<ServicioUsuariosService>(ServicioUsuariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
