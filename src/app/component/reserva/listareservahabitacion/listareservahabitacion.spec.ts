import { ComponentFixture, TestBed } from '@angular/core/testing';

import { listareservahabitacion } from './listareservahabitacion';

describe('Listareservahabitacion', () => {
  let component: listareservahabitacion;
  let fixture: ComponentFixture<listareservahabitacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [listareservahabitacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(listareservahabitacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
