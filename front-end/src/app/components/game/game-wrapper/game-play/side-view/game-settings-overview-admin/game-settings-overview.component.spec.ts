import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSettingsOverviewComponent } from './game-settings-overview.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatDialogModule} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";

fdescribe('GameSettingsOverviewComponent-admin', () => {
  let component: GameSettingsOverviewComponent;
  let fixture: ComponentFixture<GameSettingsOverviewComponent>;

  // const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSettingsOverviewComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, MatDialogModule],
      providers:
        [
          {
            provide: ActivatedRoute,
            userValue: {
              snapshot: {params: {id: '1'}}
            }
          }
        ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSettingsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create game settings overview component', () => {
    expect(component).toBeTruthy();
  });
});
