import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosPcPage } from './juegos-pc.page';

describe('JuegosPcPage', () => {
  let component: JuegosPcPage;
  let fixture: ComponentFixture<JuegosPcPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JuegosPcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
