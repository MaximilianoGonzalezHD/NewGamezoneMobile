import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosPcPage } from './juegos-pc.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('JuegosPcPage', () => {
  let component: JuegosPcPage;
  let fixture: ComponentFixture<JuegosPcPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();
    fixture = TestBed.createComponent(JuegosPcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
