import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserDetailChangeConformationComponent} from './user-detail-change-conformation.component';

describe('UserDetailChangeConformationComponent', () => {
  let component: UserDetailChangeConformationComponent;
  let fixture: ComponentFixture<UserDetailChangeConformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailChangeConformationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailChangeConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
