import { Test, TestingModule } from '@nestjs/testing';
import { ServicioGestionCuidadoresMascotasService } from './servicio-gestion_cuidadores_mascotas.service';

describe('ServicioGestionCuidadoresMascotasService', () => {
  let service: ServicioGestionCuidadoresMascotasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicioGestionCuidadoresMascotasService],
    }).compile();

    service = module.get<ServicioGestionCuidadoresMascotasService>(ServicioGestionCuidadoresMascotasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
