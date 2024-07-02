import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfilePicManagerComponent} from './profile-pic-manager.component';

describe('ProfilePicManagerComponent', () => {
  let component: ProfilePicManagerComponent;
  let fixture: ComponentFixture<ProfilePicManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilePicManagerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePicManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
