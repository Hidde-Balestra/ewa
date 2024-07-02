import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSettingsOverviewPlayerComponent } from './game-settings-overview-player.component';

describe('GameSettingsOverviewPlayerComponent', () => {
  let component: GameSettingsOverviewPlayerComponent;
  let fixture: ComponentFixture<GameSettingsOverviewPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSettingsOverviewPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSettingsOverviewPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
