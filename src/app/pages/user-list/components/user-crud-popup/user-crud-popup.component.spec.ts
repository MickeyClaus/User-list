import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrudPopupComponent } from './user-crud-popup.component';

describe('UserCrudPopupComponent', () => {
  let component: UserCrudPopupComponent;
  let fixture: ComponentFixture<UserCrudPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCrudPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCrudPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
