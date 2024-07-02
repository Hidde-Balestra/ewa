import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RulesInstructionsComponent} from './rules-instructions.component';

describe('RulesInstructionsComponent', () => {
  let component: RulesInstructionsComponent;
  let fixture: ComponentFixture<RulesInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RulesInstructionsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
