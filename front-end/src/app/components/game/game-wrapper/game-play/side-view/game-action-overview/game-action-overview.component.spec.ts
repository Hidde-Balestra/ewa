import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameActionOverviewComponent} from './game-action-overview.component';

describe('GameActionOverviewComponent', () => {
  let component: GameActionOverviewComponent;
  let fixture: ComponentFixture<GameActionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameActionOverviewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameActionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
