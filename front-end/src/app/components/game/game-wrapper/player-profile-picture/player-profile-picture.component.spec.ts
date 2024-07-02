import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerProfilePictureComponent} from './player-profile-picture.component';

describe('PlayerProfilePictureComponent', () => {
  let component: PlayerProfilePictureComponent;
  let fixture: ComponentFixture<PlayerProfilePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerProfilePictureComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
