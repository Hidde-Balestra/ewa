import {Component, OnInit} from '@angular/core';
import {GameSession} from "../../../../../../domain/models/game/GameSession";
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../../../../../../services/game/gameService";
import {GameRepository} from "../../../../../../repositories/game.repository";
import {GameActionService} from "../../../../../../services/game/gameActionService";

@Component({
  selector: 'app-game-settings-overview-player',
  templateUrl: './game-settings-overview-player.component.html',
  styleUrls: ['./game-settings-overview-player.component.scss']
})
export class GameSettingsOverviewPlayerComponent implements OnInit {
  private id: number;
  public game: GameSession;
  public gameEndsAt: string;
  public gameStartsAt: string;
  private interval: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gameService: GameService,
    private gameRepo: GameRepository
  ) {
    this.route.parent.params.subscribe((params) => {
      this.id = parseInt(params["id"]);
    });

    this.gameRepo.getBy(
      this.id,
      game => {
        this.game = GameSession.trueCopy(game);

        this.gameEndsAt = new Date(game.endsAt).toTimeString();
        this.gameStartsAt = new Date(game.startsAt).toTimeString();
      },
      error => console.log(error)
    );

    this.settingsUpdate();
  }

  ngOnInit(): void {
  }

  settingsUpdate() {
    this.interval = setInterval(() => {
      this.gameRepo.getBy(
        this.id,
        game => {
          this.game = GameSession.trueCopy(game);

          this.gameEndsAt = new Date(game.endsAt).toTimeString();
          this.gameStartsAt = new Date(game.startsAt).toTimeString();
        },
        error => console.log(error)
      );

    }, GameActionService.ACTION_REFRESH_INTERVAL);
  }

}
