import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateUsuarioPage } from './update-usuario.page';

describe('UpdateUsuarioPage', () => {
  let component: UpdateUsuarioPage;
  let fixture: ComponentFixture<UpdateUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
