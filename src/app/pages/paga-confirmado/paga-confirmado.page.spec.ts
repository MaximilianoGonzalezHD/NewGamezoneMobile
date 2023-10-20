import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagaConfirmadoPage } from './paga-confirmado.page';

describe('PagaConfirmadoPage', () => {
  let component: PagaConfirmadoPage;
  let fixture: ComponentFixture<PagaConfirmadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagaConfirmadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
