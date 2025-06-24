import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLore } from './hero-lore';

describe('HeroLore', () => {
  let component: HeroLore;
  let fixture: ComponentFixture<HeroLore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroLore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroLore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
