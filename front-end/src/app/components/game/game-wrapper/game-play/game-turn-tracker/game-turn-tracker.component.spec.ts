import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameTurnTrackerComponent} from './game-turn-tracker.component';

describe('GameTurnTrackerComponent', () => {
  let component: GameTurnTrackerComponent;
  let fixture: ComponentFixture<GameTurnTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameTurnTrackerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTurnTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
