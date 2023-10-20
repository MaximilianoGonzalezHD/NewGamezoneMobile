import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosPagoPage } from './datos-pago.page';

describe('DatosPagoPage', () => {
  let component: DatosPagoPage;
  let fixture: ComponentFixture<DatosPagoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatosPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
