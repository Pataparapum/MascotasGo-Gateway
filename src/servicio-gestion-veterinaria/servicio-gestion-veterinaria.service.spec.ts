import { Test, TestingModule } from '@nestjs/testing';
import { ServicioGestionVeterinariaService } from './servicio-gestion-veterinaria.service';

describe('ServicioGestionVeterinariaService', () => {
  let service: ServicioGestionVeterinariaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicioGestionVeterinariaService],
    }).compile();

    service = module.get<ServicioGestionVeterinariaService>(ServicioGestionVeterinariaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
