import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSettingsPopUpComponent } from './edit-settings-pop-up.component';

describe('EditSettingsPopUpComponent', () => {
  let component: EditSettingsPopUpComponent;
  let fixture: ComponentFixture<EditSettingsPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSettingsPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSettingsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
