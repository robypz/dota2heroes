import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAbilities } from './hero-abilities';

describe('HeroAbilities', () => {
  let component: HeroAbilities;
  let fixture: ComponentFixture<HeroAbilities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroAbilities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAbilities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
