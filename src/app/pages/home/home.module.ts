import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { JogosModule } from '../../components/jogo/jogos.module';
import { GameService } from '../../services/tip.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      },
    ]),
    SharedModule,
    JogosModule,
  ],
  providers: [
    GameService,
  ]
})
export class HomeModule { }
