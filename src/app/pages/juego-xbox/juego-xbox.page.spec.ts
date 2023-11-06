import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoXboxPage } from './juego-xbox.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('JuegoXboxPage', () => {
  let component: JuegoXboxPage;
  let fixture: ComponentFixture<JuegoXboxPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(JuegoXboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
