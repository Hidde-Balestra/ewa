import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerInformationOverviewPopUpComponent} from './player-information-overview-pop-up.component';

describe('PlayerInformationOverviewPopUpComponent', () => {
  let component: PlayerInformationOverviewPopUpComponent;
  let fixture: ComponentFixture<PlayerInformationOverviewPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerInformationOverviewPopUpComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInformationOverviewPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
