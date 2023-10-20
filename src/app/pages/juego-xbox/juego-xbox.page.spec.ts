import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoXboxPage } from './juego-xbox.page';

describe('JuegoXboxPage', () => {
  let component: JuegoXboxPage;
  let fixture: ComponentFixture<JuegoXboxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JuegoXboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
