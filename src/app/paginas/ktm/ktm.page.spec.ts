import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KtmPage } from './ktm.page';

describe('KtmPage', () => {
  let component: KtmPage;
  let fixture: ComponentFixture<KtmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KtmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
