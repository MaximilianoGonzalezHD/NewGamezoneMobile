import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosPagoPage } from './datos-pago.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('DatosPagoPage', () => {
  let component: DatosPagoPage;
  let fixture: ComponentFixture<DatosPagoPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(DatosPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
