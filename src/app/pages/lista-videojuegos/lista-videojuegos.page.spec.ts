import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaVideojuegosPage } from './lista-videojuegos.page';

describe('ListaVideojuegosPage', () => {
  let component: ListaVideojuegosPage;
  let fixture: ComponentFixture<ListaVideojuegosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaVideojuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
