import { ComponentFixture, TestBed } from '@angular/core/testing';

import { reservahabitacion } from './reservahabitacion';

describe('Reservahabitacion', () => {
  let component: reservahabitacion;
  let fixture: ComponentFixture<reservahabitacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [reservahabitacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(reservahabitacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
