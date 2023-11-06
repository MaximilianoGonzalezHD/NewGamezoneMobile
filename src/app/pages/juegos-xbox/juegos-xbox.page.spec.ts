import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosXboxPage } from './juegos-xbox.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('JuegosXboxPage', () => {
  let component: JuegosXboxPage;
  let fixture: ComponentFixture<JuegosXboxPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(JuegosXboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
