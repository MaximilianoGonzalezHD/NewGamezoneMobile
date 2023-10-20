import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosXboxPage } from './juegos-xbox.page';

describe('JuegosXboxPage', () => {
  let component: JuegosXboxPage;
  let fixture: ComponentFixture<JuegosXboxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JuegosXboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
