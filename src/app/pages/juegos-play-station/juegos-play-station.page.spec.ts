import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosPlayStationPage } from './juegos-play-station.page';

describe('JuegosPlayStationPage', () => {
  let component: JuegosPlayStationPage;
  let fixture: ComponentFixture<JuegosPlayStationPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(JuegosPlayStationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
