import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRoles } from './hero-roles';

describe('HeroRoles', () => {
  let component: HeroRoles;
  let fixture: ComponentFixture<HeroRoles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroRoles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroRoles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
