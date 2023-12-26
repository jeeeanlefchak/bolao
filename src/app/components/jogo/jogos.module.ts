import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { JogosComponent } from './jogo-list/jogos.component';
import { DialogModule } from 'primeng/dialog';
import { GameService } from '../../services/tip.service';
import { RouterModule, Routes } from '@angular/router';
import { JogoDetailComponent } from './jogo-detail/jogo-detail.component';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { JogadorService } from '../../services/jogador.service';


const routes: Routes = [
  { path: 'list', component: JogosComponent },
  { path: ':id/detail', component: JogoDetailComponent },
];

@NgModule({
  declarations: [
    JogosComponent,
    JogoDetailComponent,
  ],
  exports: [
    JogosComponent,
    JogoDetailComponent,
  ],
  imports: [
    SharedModule,
    DialogModule,
    RouterModule.forChild(routes),
    TableModule,
    InputNumberModule,

  ],
  providers: [
    GameService,
    JogadorService,
  ]
})
export class JogosModule { }
