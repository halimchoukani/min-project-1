import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercice1Component } from './exercice1.component';

describe('Exercice1Component', () => {
  let component: Exercice1Component;
  let fixture: ComponentFixture<Exercice1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercice1Component],
    });
    fixture = TestBed.createComponent(Exercice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
