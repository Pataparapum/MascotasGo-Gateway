import { Test, TestingModule } from '@nestjs/testing';
import { ServicioAuthService } from './servicio-auth.service';

describe('ServicioAuthService', () => {
  let service: ServicioAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicioAuthService],
    }).compile();

    service = module.get<ServicioAuthService>(ServicioAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
