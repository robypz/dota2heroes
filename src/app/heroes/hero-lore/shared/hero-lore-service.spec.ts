import { TestBed } from '@angular/core/testing';

import { HeroLoreService } from './hero-lore-service';

describe('HeroLoreService', () => {
  let service: HeroLoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroLoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
