import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AgregarItemPage } from './agregar-item.page';

describe('AgregarItemPage', () => {
  let component: AgregarItemPage;
  let fixture: ComponentFixture<AgregarItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
