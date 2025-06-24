import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPortrait } from './hero-portrait';

describe('HeroPortrait', () => {
  let component: HeroPortrait;
  let fixture: ComponentFixture<HeroPortrait>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroPortrait]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPortrait);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
