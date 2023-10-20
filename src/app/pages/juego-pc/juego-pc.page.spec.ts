import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoPcPage } from './juego-pc.page';

describe('JuegoPcPage', () => {
  let component: JuegoPcPage;
  let fixture: ComponentFixture<JuegoPcPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JuegoPcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
