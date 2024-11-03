import { Test, TestingModule } from '@nestjs/testing';
import { CuidadoresMascotasService } from './cuidadores_mascotas.service';

describe('CuidadoresMascotasService', () => {
  let service: CuidadoresMascotasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuidadoresMascotasService],
    }).compile();

    service = module.get<CuidadoresMascotasService>(CuidadoresMascotasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
