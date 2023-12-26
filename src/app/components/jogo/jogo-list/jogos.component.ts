
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Game } from '../../../models/tip.model';
import { GameService } from '../../../services/tip.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../../../services/shared.service';

@Component({
    selector: 'app-jogos',
    templateUrl: './jogos.component.html',
    styleUrls: ['./jogos.component.scss']
})
export class JogosComponent implements OnInit, OnDestroy {
    games: Game[] = [];
    dialogNewGame: boolean = false;
    game: Game = new Game();

    private _unsubscribe: Subscription[] = [];
    constructor(
        private readonly _gameService: GameService,
        private readonly _route: Router,
        private readonly _sharedService: SharedDataService,

    ) {
    }

    ngOnInit(): void {
        this.getGames();
    }

    ngOnDestroy() {
        this._unsubscribe.forEach((sb) => sb.unsubscribe());
    }

    getGames() {
        let sub = this._gameService.get().subscribe(r => {
            console.log(r);
            this.games = r;
        }, err => {
            console.log(err);
            this._sharedService.showToast('Erro', 'Erro', 'error');
        })
        this._unsubscribe.push(sub);
    }

    openDialogGame(game?: Game) {
        if (!this._sharedService.permission('CREATE_GAME')) return;
        this.game = new Game();
        if (game) this.game = game;
        this.dialogNewGame = true;
    }

    saveGame() {
        if (!this.game.title) {
            this._sharedService.showToast('Atenção', 'Form invalido', 'warn');
            return;
        }
        this.game.empresaId = 'eqLKxJ2uliELThYTEURh';
        this.game.modifiedOn = new Date();
        console.log(this.game);
        if (this.game.id) {
            this._gameService.update(this.game).then(r => {
                this.dialogNewGame = false;
                this._sharedService.showToast('Sucesso', 'Sucesso', 'success');
            }, err => {
                debugger
                this._sharedService.showToast('Erro', 'Erro', 'error');
            })
        } else {
            this.game.createdOn = new Date();
            this._gameService.add(this.game).then(r => {
                this.dialogNewGame = false;
                this._sharedService.showToast('Sucesso', 'Sucesso', 'success');
            }, err => {
                debugger
                this._sharedService.showToast('Erro', 'Erro', 'error');
            })
        }
    }

    onClickGame(game: Game) {
        this._route.navigateByUrl('game/' + game.id + '/detail');
    }

}
