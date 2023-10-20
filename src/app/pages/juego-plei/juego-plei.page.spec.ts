import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoPleiPage } from './juego-plei.page';

describe('JuegoPleiPage', () => {
  let component: JuegoPleiPage;
  let fixture: ComponentFixture<JuegoPleiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JuegoPleiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
