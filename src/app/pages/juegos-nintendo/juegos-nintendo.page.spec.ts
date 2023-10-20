import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosNintendoPage } from './juegos-nintendo.page';

describe('JuegosNintendoPage', () => {
  let component: JuegosNintendoPage;
  let fixture: ComponentFixture<JuegosNintendoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JuegosNintendoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
