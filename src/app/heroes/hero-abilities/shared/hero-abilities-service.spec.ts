import { TestBed } from '@angular/core/testing';

import { HeroAbilitiesService } from './hero-abilities-service';

describe('HeroAbilitiesService', () => {
  let service: HeroAbilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroAbilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
