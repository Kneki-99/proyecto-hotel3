import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formreservahabitacion } from './formreservahabitacion';

describe('Formreservahabitacion', () => {
  let component: Formreservahabitacion;
  let fixture: ComponentFixture<Formreservahabitacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formreservahabitacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formreservahabitacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
