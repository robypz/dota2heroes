import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBaseSkills } from './hero-base-skills';

describe('HeroBaseSkills', () => {
  let component: HeroBaseSkills;
  let fixture: ComponentFixture<HeroBaseSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroBaseSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBaseSkills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
