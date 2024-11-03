import { Test, TestingModule } from '@nestjs/testing';
import { VeterinariasService } from './veterinarias.service';

describe('VeterinariasService', () => {
  let service: VeterinariasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VeterinariasService],
    }).compile();

    service = module.get<VeterinariasService>(VeterinariasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
