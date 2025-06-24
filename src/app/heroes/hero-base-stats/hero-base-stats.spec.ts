import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBaseStats } from './hero-base-stats';

describe('HeroBaseStats', () => {
  let component: HeroBaseStats;
  let fixture: ComponentFixture<HeroBaseStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroBaseStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBaseStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
